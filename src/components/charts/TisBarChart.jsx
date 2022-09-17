import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import has from 'has';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { colors, labels } from '../../api/constants';
import {
    numFormat,
    wholeNumFormat,
    currencyFormat,
    wholeCurrencyFormat,
    shortenValue,
} from '../../api/helpers';
import HorizontalTick from './HorizontalTick';
import VerticalTick, { tickFontSize } from './VerticalTick';
import LastUpdateTag from '../general/LastUpdateTag';

import './Charts.scss';

export const columnVariants = {
    inOut: [
        {
            key: 'outgoing',
            name: labels.charts.outgoing,
            color: colors.colorOrange,
        },
        {
            key: 'incoming',
            name: labels.charts.incoming,
            color: colors.colorDarkBlue,
        },
    ],
    donors: [
        {
            key: 'donors',
            name: labels.charts.uniqeDonors,
            color: colors.colorDarkBlue,
        },
    ],
};

function TisBarChart(props) {
    const vertical = has(props, 'vertical');
    const axisNumFormat = has(props, 'currency')
        ? wholeCurrencyFormat
        : wholeNumFormat;
    const tooltipNumFormat = has(props, 'currency')
        ? currencyFormat
        : numFormat;
    const axisConfig = {
        fill: '#333',
        fontSize: tickFontSize,
    };
    const shortChartNames = (name) => {
        const length = has(props, 'namesLength') ? props.namesLength : 200;
        return shortenValue(name, length);
    };
    const bars = [];
    (has(props, 'bars') ? props.bars : columnVariants.inOut).forEach((bar) => {
        bars.push(
            <Bar
                key={bar.key}
                dataKey={bar.key}
                fill={bar.color}
                name={bar.name}
            />
        );
    });

    let labelLines = 1;
    props.data.forEach((row) => {
        labelLines = Math.max(labelLines, row.name.split('\n').length);
    });

    return (
        <div className="chart-wrapper my-3">
            {has(props, 'title') && <h2>{props.title}</h2>}
            {has(props, 'subtitle') && <h6>{props.subtitle}</h6>}
            <LastUpdateTag />
            <div
                className={`chart-outer${
                    has(props, 'scrollable') ? ' scrollable' : ''
                }`}
            >
                <div
                    className="chart"
                    style={
                        vertical
                            ? {
                                  height: `${
                                      55 +
                                      props.data.length *
                                          Math.max(2, labelLines) *
                                          20
                                  }px`,
                              }
                            : {}
                    }
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={props.data}
                            layout={vertical ? 'vertical' : 'horizontal'}
                            margin={{
                                top: 5,
                                right: 5,
                                left: 15,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3"
                                horizontal={!vertical}
                                vertical={vertical}
                            />
                            {vertical ? (
                                <XAxis
                                    type="number"
                                    tickFormatter={axisNumFormat}
                                    tick={axisConfig}
                                />
                            ) : (
                                <XAxis
                                    type="category"
                                    dataKey="name"
                                    tickFormatter={shortChartNames}
                                    tick={
                                        labelLines > 1 ? (
                                            <HorizontalTick />
                                        ) : (
                                            axisConfig
                                        )
                                    }
                                    minTickGap={-10}
                                    height={15 + labelLines * 15}
                                />
                            )}
                            {vertical ? (
                                <YAxis
                                    type="category"
                                    dataKey="name"
                                    tickFormatter={shortChartNames}
                                    tick={
                                        labelLines > 1 ? (
                                            <VerticalTick />
                                        ) : (
                                            axisConfig
                                        )
                                    }
                                    minTickGap={-15}
                                    width={160}
                                />
                            ) : (
                                <YAxis
                                    type="number"
                                    tickFormatter={axisNumFormat}
                                    tick={axisConfig}
                                />
                            )}
                            <Tooltip formatter={tooltipNumFormat} />
                            <Legend />
                            {bars}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            {has(props, 'partiesDisclaimer') && (
                <em className="disclaimer">{labels.disclaimerParties}</em>
            )}

            {has(props, 'buttonLink') && (
                <div className="buttons mt-3 text-center">
                    <Button as={Link} to={props.buttonLink} variant="secondary">
                        {has(props, 'buttonText')
                            ? props.buttonText
                            : labels.showMore}
                    </Button>
                </div>
            )}
        </div>
    );
}

export default TisBarChart;
