export const imgRootPath = '/img/';

export const images = {
    analyses: 'user_grey.png',
    news: 'news.png',
};

export const colorLightBlue = '#2bace2';
export const colorDarkBlue = '#1b335f';
export const colorOrange = '#f06c50';
export const colorGrey = '#e9f2f9';

export const colors = {
    colorLightBlue,
    colorDarkBlue,
    colorOrange,
    colorGrey,
};

export const transparencyClasses = {
    good: 'good',
    average: 'average',
    bad: 'bad',
};

export const labels = {
    analysis: 'Celkové hodnotenie',
    analysisDate: 'Hodnotenie ku dňu',
    disclaimerAccount: 'Príjmy aj výdavky sú očistené o vrátené platby.',
    disclaimerCandidate:
        'Kandidát(ka), ktorý(á) na financovanie kampane využíva stranícky účet, viacero účtov alebo účet nemá a vizualizáciu príjmov a výdavkov preto nie je možné zobraziť.',
    disclaimerParties:
        'Zoznam ďalších kandidátov, ktorí na financovanie kampaní využívajú stranícke účty, viacero účtov alebo účty nemajú a vizualizáciu ich príjmov a výdavkov preto nie je možné zobraziť. Podrobnosti nájdete po rozkliknutí mena kandidáta. Kandidátov postupne dopĺňame.',
    elections: {
        type_key: 'typ volieb',
        municipality_key: 'samospráva',
        party_key: 'PS',
        region_key: 'label',
        local: {
            key: 'miestne',
            name: 'Miestne voľby',
        },
        regional: {
            key: 'župné',
            name: 'Župné voľby',
        },
    },
    charts: {
        disclaimer:
            'Grafy obsahujú iba dáta z transparentných účtov evidovaných podľa zákona na webe ministerstva vnútra a sú očistené o vrátené platby.',
        updated: 'Naposledy aktualizované',
        incoming: 'Príjmy',
        outgoing: 'Výdavky',
        uniqeDonors: 'Počet unikátnych darcov',
    },
    indicators: {
        account: {
            title: 'Transparentný účet',
            criteria: [
                'existencia samostatného účtu',
                'oznamovacia povinnosť',
                'označovanie platcov a príjemcov',
                'podrobnosť účtu',
                'popisovanie výdavkov',
                'časová reálnosť výdavkov',
                'zachytenie predkampane',
            ],
        },
        financing: {
            title: 'Financovanie kampane',
            criteria: [
                'viaczdrojovosť',
                'hodnovernosť prispievateľov',
                'plán kampane',
            ],
        },
        information: {
            title: 'Informovanosť o kampani',
            criteria: [
                'existencia webu',
                'volebný program',
                'funkčný kontakt',
                'kampaňový tím/spolupracujúce agentúry',
                'predvolebné akcie',
                'označovanie inzercie',
            ],
        },
    },
    municipality: 'Samospráva',
    name: 'Meno',
    parties: {
        account_personal_key: 'account',
        account_party_key: 'party_account',
        municipality_key: 'samospráva_right',
        party_key: 'party',
        region_key: 'label_right',
        type_key: 'typ volieb_right',
    },
    party: 'Strana / koalícia',
    transparency: {
        [transparencyClasses.good]: 'transparentná kampaň',
        [transparencyClasses.average]: 'kampaň s výhradami',
        [transparencyClasses.bad]: 'netransparentná kampaň',
    },
    score: ['nezistené/netýka sa', 'áno', 'čiastočne', 'nie'],
    search: 'Vyhľadávanie',
    showMore: 'Zobraziť viac',
    type: 'Typ volieb',
};

export const errors = {
    loading: 'Chyba pri načítaní dát. Prosím načítajte stránku znovu.',
};

export const constants = {
    colors,
    errors,
    images,
    labels,
    transparencyClasses,
};

export default constants;
