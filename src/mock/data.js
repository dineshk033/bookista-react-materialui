// eslint-disable-next-line import/prefer-default-export
export const CategoriesOptions = [
    { id: 1, value: 'All Genres' },
    { id: 2, value: 'Arts & Photography' },
    { id: 3, value: 'Biography & Memory' },
    { id: 4, value: 'Comics' },
    { id: 5, value: 'Recipes & Food' },
    { id: 6, value: 'History' },
    { id: 7, value: 'Fiction' },
    { id: 8, value: 'Romance' },
    { id: 9, value: 'Fitness & Health' }
];

export const FormatOptions = [
    { id: 1, value: 'All Format' },
    { id: 2, value: 'Hard Cover' },
    { id: 3, value: 'E-Book' },
    { id: 4, value: 'Paper Back' },
    { id: 5, value: 'Audio Book' }
];

export const PublisherOptions = [
    { id: 1, value: 'All Publishers' },
    { id: 2, value: 'Sunrise Book Store' },
    { id: 3, value: 'Cloudtail India' },
    { id: 4, value: 'Bookswagon' },
    { id: 5, value: 'URead Store' },
    { id: 6, value: 'Parris Store' }
];

export const YearOptions = [
    { id: 1, value: 'All Years' },
    { id: 2, value: '2020 - 20201' },
    { id: 3, value: '2015 - 2019' },
    { id: 4, value: '2000 - 2015' },
    { id: 5, value: '< 2000' }
];
export const FILTERSMOCK = [
    {
        open: true,
        label: 'Categories',
        selected: [1],
        list: CategoriesOptions
    },
    {
        open: true,
        label: 'Book Format',
        selected: [1],
        list: FormatOptions
    },
    {
        open: false,
        label: 'Publisher',
        selected: [1],
        list: PublisherOptions
    },
    {
        open: false,
        label: 'Years',
        selected: [1],
        list: YearOptions
    }
];
