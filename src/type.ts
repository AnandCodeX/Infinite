export type Author = {
  name: string;
  birth_year: number;
  death_year: number;
};

export type BookType = {
  id: number;
  title: string;
  authors: Author[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Record<string, string>;
  download_count: number;
};
export type BookResultType = {
  count: number;
  next: null | string;
  previous: null | string;
  results: BookType[];
};

export type ErrorType = {
  message?: string;
};
export const sampleBook: BookType = {
  id: 1513,
  title: 'Romeo and Juliet',
  authors: [
    {
      name: 'Shakespeare, William',
      birth_year: 1564,
      death_year: 1616,
    },
  ],
  translators: [],
  subjects: [
    'Conflict of generations -- Drama',
    'Juliet (Fictitious character) -- Drama',
    'Romeo (Fictitious character) -- Drama',
    'Tragedies',
    'Vendetta -- Drama',
    'Verona (Italy) -- Drama',
    'Youth -- Drama',
  ],
  bookshelves: [],
  languages: ['en'],
  copyright: false,
  media_type: 'Text',
  formats: {
    'application/x-mobipocket-ebook':
      'https://www.gutenberg.org/ebooks/1513.kf8.images',
    'application/epub+zip':
      'https://www.gutenberg.org/ebooks/1513.epub3.images',
    'text/html': 'https://www.gutenberg.org/ebooks/1513.html.images',
    'application/octet-stream':
      'https://www.gutenberg.org/files/1513/1513-0.zip',
    'image/jpeg':
      'https://www.gutenberg.org/cache/epub/1513/pg1513.cover.medium.jpg',
    'text/plain': 'https://www.gutenberg.org/ebooks/1513.txt.utf-8',
    'text/plain; charset=us-ascii':
      'https://www.gutenberg.org/files/1513/1513-0.txt',
    'application/rdf+xml': 'https://www.gutenberg.org/ebooks/1513.rdf',
  },
  download_count: 68248,
};
