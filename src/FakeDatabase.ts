export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

// Create a list of books as a fake database
export const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
  },
  { id: 3, title: '1984', author: 'George Orwell', publicationYear: 1949 },
  {
    id: 4,
    title: 'Moby Dick',
    author: 'Herman Melville',
    publicationYear: 1851,
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationYear: 1813,
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publicationYear: 1951,
  },
  {
    id: 7,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publicationYear: 1932,
  },
  {
    id: 8,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publicationYear: 1954,
  },
  {
    id: 9,
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    publicationYear: 1847,
  },
  {
    id: 10,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    publicationYear: 1869,
  },
];
