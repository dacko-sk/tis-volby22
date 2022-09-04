export const separator = '/';

export const segments = {
    ANALYSES: 'hodnotenia',
    CAMPAIGNS: 'kampane',
    CANDIDATE: 'kandidat',
    CHARTS: 'grafy',
    DONORS: 'donori',
    NEWS: 'aktuality',
    ROOT: '/',
    SEARCH: 'vyhladavanie',
};

export const routes = {
    analyses: segments.ROOT + segments.ANALYSES,
    article: (page, slug) => segments.ROOT + page + separator + slug,
    articles: (page) => segments.ROOT + page,
    campaigns: segments.ROOT + segments.CHARTS + separator + segments.CAMPAIGNS,
    candidate: (name, town) =>
        segments.ROOT +
        segments.CANDIDATE +
        separator +
        encodeURIComponent(
            `${name.replaceAll(' ', '.')}~${town.replaceAll(' ', '.')}`
        ),
    charts: segments.ROOT + segments.CHARTS,
    donors: segments.ROOT + segments.CHARTS + separator + segments.DONORS,
    home: segments.ROOT,
    news: segments.ROOT + segments.NEWS,
    search: (query) => segments.ROOT + segments.SEARCH + separator + query,
};
