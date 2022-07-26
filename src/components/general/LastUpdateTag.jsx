import has from 'has';

import { labels } from '../../api/constants';
import { dateFormat } from '../../api/helpers';

import useData, { baseDate } from '../../context/DataContext';

function LastUpdateTag({ short, timestamp }) {
    const { csvData } = useData();
    const lastUpdate =
        timestamp ??
        (has(csvData, 'lastUpdate') ? csvData.lastUpdate : baseDate);

    return (
        <em className="disclaimer">
            {!short && (
                <span>
                    {`${labels.charts.disclaimer} `}
                    <br className="d-none d-xl-inline" />
                </span>
            )}
            {labels.charts.updated} {dateFormat(lastUpdate)}.
        </em>
    );
}

export default LastUpdateTag;
