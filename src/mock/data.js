import { internet, lorem, name, random } from 'faker';
import _lodash from 'lodash';

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
    { id: 9, value: 'Fitness & Health' },
    { id: 10, value: 'Non - Fiction' }
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

export const Booklist = [
    {
        categories: ['UX', 'Design'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71dAwTmZBKL.jpg',
        title: "Don't Make Me Think, Revisited",
        description: lorem.sentences(),
        price: _lodash.random(700, 999),
        offerPrice: _lodash.random(400, 700),
        writtenBy: 'Steve Krug',
        publisher: 'New Riders',
        rating: 4,
        reviews: 225,
        year: _lodash.random(1986, 2020)
    },
    {
        categories: ['Mental', 'Health'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Lb75rUhLL.jpg',
        title: 'The Psychology of Money',
        description: lorem.sentences(),
        price: _lodash.random(500, 700),
        offerPrice: _lodash.random(200, 500),
        writtenBy: 'Morgan Housel',
        publisher: 'Prime Store',
        rating: 3,
        reviews: 96,
        year: 2020
    },
    {
        categories: ['Mental', 'Health'],
        imageUrl: 'https://m.media-amazon.com/images/I/41SG4SO4T9L._SY346_.jpg',
        title: 'IKIGAI, The Japanese Secret to a Long and Happy Life',
        description: lorem.sentences(),
        price: _lodash.random(300, 450),
        offerPrice: _lodash.random(200, 300),
        writtenBy: 'Ichigo Ichie',
        publisher: 'Hector Miralles',
        rating: 4,
        reviews: 523,
        year: 2021
    },
    {
        categories: ['Literature', 'Fiction', 'History'],
        imageUrl: 'http://georgerrmartin.com/gallery/coverart/GOThcEng.jpg',
        title: 'A Game of Thrones, A Song of Ice and Fire',
        description: lorem.sentences(),
        price: _lodash.random(700, 1000),
        offerPrice: _lodash.random(500, 700),
        writtenBy: 'George RR Martin',
        publisher: 'Hector Miralles',
        rating: 3,
        reviews: 134,
        year: 1998
    },
    {
        categories: ['Personality', 'Non -Fiction'],
        imageUrl: 'https://m.media-amazon.com/images/I/51l9PziSjEL.jpg',
        title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        description: lorem.sentences(),
        price: _lodash.random(700, 1000),
        offerPrice: _lodash.random(500, 700),
        writtenBy: 'James Clear',
        publisher: 'Aliva',
        rating: 4,
        reviews: 76,
        year: 2018
    },
    {
        categories: ['Southern Gothic'],
        imageUrl: 'https://m.media-amazon.com/images/I/51i2QeW8T1L.jpg',
        title: 'To Kill a Mockingbird: A Graphic Novel',
        description: lorem.sentences(),
        price: _lodash.random(500, 700),
        offerPrice: _lodash.random(300, 500),
        writtenBy: 'Albert Pok',
        publisher: 'Harper',
        rating: 3,
        reviews: 54,
        year: 2010
    },
    {
        categories: ['Biography', 'Non - Fiction'],
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/417XYO+XsPL._SX300_BO1,204,203,200_.jpg',
        title: 'The Diary of a Young Girl: The Definitive Edition',
        description: lorem.sentences(),
        price: _lodash.random(500, 700),
        offerPrice: _lodash.random(300, 500),
        writtenBy: 'Anne Frank',
        publisher: 'Maple Press',
        rating: 2,
        reviews: 623,
        year: 2013
    }
];

export const BooklistData = (count) => {
    const mocking = {
        categories: [lorem.word],
        imageUrl: random.image(),
        title: lorem.lines(),
        description: lorem.sentences(),
        price: _lodash.random(500, 700),
        offerPrice: _lodash.random(300, 500),
        writtenBy: name.findName(),
        publisher: internet.domainName(),
        rating: _lodash.random(1, 5),
        reviews: _lodash.random(100, 300),
        year: _lodash.random(1999, 2020)
    };

    const mocked = Array(count)
        .fill(1)
        .map((_, idx) => ({ ...mocking, id: idx }));
    return [...Booklist, ...mocked];
};
