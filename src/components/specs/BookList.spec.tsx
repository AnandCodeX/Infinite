import { fireEvent, render, screen } from '@testing-library/react';
import { BooksList } from '../BooksList.tsx';
import { BookType } from '../type.ts';

const mockBooks: BookType[] = [
  {
    id: 1513,
    title: 'Romeo and Juliet',
    authors: [
      { name: 'Shakespeare, William', birth_year: 1564, death_year: 1616 },
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
  },
];

describe('BooksList', () => {
  const mockLastBookRef = jest.fn();
  const mockSetSelectedBookCount = jest.fn();

  beforeEach(() => {
    render(
      <BooksList
        books={mockBooks}
        lastBookRef={mockLastBookRef}
        setSelectedBookCount={mockSetSelectedBookCount}
      />,
    );
  });

  it('1. renders BooksList with book items', () => {
    // Verify that the book items are rendered

    expect(screen.getByText('Romeo and Juliet')).toBeInTheDocument();
  });

  it('3. calls handleChange when a book is checked', () => {
    // Simulate clicking a checkbox
    // const checkbox = screen.getByTestId('book-checkbox-1');
    const { container } = render(
      <BooksList
        books={mockBooks}
        lastBookRef={mockLastBookRef}
        setSelectedBookCount={mockSetSelectedBookCount}
      />,
    );
    const checkbox = container.querySelectorAll('input[type="checkbox"]')[0];
    if (checkbox) fireEvent.click(checkbox);

    // Verify that handleChange was called with the correct parameters
    expect(mockSetSelectedBookCount).toHaveBeenCalled();
  });
});

