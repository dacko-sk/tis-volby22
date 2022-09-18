import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import has from 'has';
import { labels } from '../../api/constants';
import { sortBySpending, substitute } from '../../api/helpers';
import useData from '../../context/DataContext';
import Loading from '../general/Loading';
import TisBarChart from './TisBarChart';

function Regions() {
    const [activeKey, setActiveKey] = useState(null);

    const { csvData } = useData();

    const regional = {};
    const local = {};
    const charts = {};

    // parse data
    if (has(csvData, 'data')) {
        csvData.data.forEach((row) => {
            if (has(row, 'label') && row.label && !row.isParty) {
                const key = substitute(row.label);
                if (!has(charts, key)) {
                    charts[key] = [];
                    regional[key] = [];
                    local[key] = [];
                    charts[key] = false;
                }
                const person = {
                    name: `${row.displayName}\n${row.municipalityName}`,
                    incoming: row.sum_incoming,
                    outgoing: row.sum_outgoing,
                };
                if (row.isRegional) {
                    regional[key].push(person);
                } else {
                    local[key].push(person);
                }
            }
        });
    }

    // initially all charts are NOT loaded
    const [loadedRegions, setLoadedRegions] = useState(charts);

    // create accordion component
    const accordions = [];
    Object.keys(charts).forEach((region) => {
        const chart = loadedRegions[region] ? (
            <div>
                {regional[region].length > 0 && (
                    <TisBarChart
                        title={labels.elections.regional.name}
                        data={regional[region]
                            .sort(sortBySpending)
                            .slice(0, 10)}
                        currency
                        vertical
                    />
                )}
                {local[region].length > 0 && (
                    <TisBarChart
                        title={labels.elections.local.name}
                        data={local[region].sort(sortBySpending).slice(0, 10)}
                        currency
                        vertical
                    />
                )}
            </div>
        ) : (
            <Loading />
        );
        accordions.push(
            <Accordion.Item key={region} eventKey={region}>
                <Accordion.Header>{region}</Accordion.Header>
                <Accordion.Body>{chart}</Accordion.Body>
            </Accordion.Item>
        );
    });

    const onSelect = (ak) => {
        // open/close accordion
        setActiveKey(ak);
        // start chart loading (if needed)
        if (ak && !loadedRegions[ak]) {
            setLoadedRegions((prevState) => {
                return {
                    ...prevState,
                    [ak]: true,
                };
            });
        }
    };

    return (
        <div className="my-4">
            <h2>Top 10 kampaní v jednotlivých krajoch</h2>
            <Accordion
                className="mt-3"
                activeKey={activeKey}
                onSelect={onSelect}
            >
                {accordions}
            </Accordion>
        </div>
    );
}

export default Regions;
