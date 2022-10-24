import has from 'has';
import Countdown from 'react-countdown';
import { labels } from '../../api/constants';
import { currencyFormat } from '../../api/helpers';
import useData from '../../context/DataContext';
import LastUpdateTag from './LastUpdateTag';

import './TotalSpending.scss';

function TotalSpending() {
    const { csvData } = useData();

    // parse data
    let total = 0;
    const uniqueAccounts = {};
    if (has(csvData, 'data')) {
        csvData.data.forEach((row) => {
            // sum of outgoing amounts from all transparent accounts
            if (row.sum_outgoing > 0) {
                // add each account number only once
                if (has(uniqueAccounts, row[labels.elections.account_key])) {
                    uniqueAccounts[row[labels.elections.account_key]] += 1;
                    // console.log(
                    //     uniqueAccounts[row[labels.elections.account_key]],
                    //     row[labels.elections.account_key]
                    // );
                } else {
                    uniqueAccounts[row[labels.elections.account_key]] = 1;
                    total += row.sum_outgoing;
                }
            }
            // remove manually added duplicate expenses
            if (has(row, 'duplicateExpenses') && row.duplicateExpenses > 0) {
                total -= row.duplicateExpenses;
            }
        });
    }

    // Renderer callback with condition
    const renderer = ({ formatted, completed }) => {
        if (completed) {
            // Render a completed state
            return <p>Voľby sa skončili.</p>;
        }
        // Render a countdown
        return (
            <div className="countdown hero-number">
                <span className="countdown-bg-o me-3" data-label="dní">
                    {formatted.days}
                </span>
                <span className="countdown-bg me-3" data-label="hodín">
                    {formatted.hours}
                </span>
                <span className="countdown-bg me-3" data-label="minút">
                    {formatted.minutes}
                </span>
                <span className="countdown-bg" data-label="sekúnd">
                    {formatted.seconds}
                </span>
            </div>
        );
    };

    return (
        <div className="row gy-3 gy-lg-0 text-center">
            <div className="col-lg-6">
                <h2>Zostávajúci čas do volieb</h2>
                <Countdown date="2022-10-29T07:00:00" renderer={renderer} />
            </div>
            <div className="col-lg-6">
                <h2>Celkové výdavky kandidátov</h2>
                <p className="hero-number">
                    {currencyFormat(total)}
                    <LastUpdateTag
                        short
                        timestamp={
                            has(csvData, 'data') ? csvData.lastUpdate : null
                        }
                    />
                </p>
            </div>
        </div>
    );
}

export default TotalSpending;
