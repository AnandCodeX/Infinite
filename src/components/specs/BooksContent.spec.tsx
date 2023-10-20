import { render, screen} from '@testing-library/react';
import { BooksContent } from '../BooksContent.tsx';
import { BooksList } from '../BooksList.tsx';
import { apiResult } from './fixtures/apiResult.ts';
import { BookListHeader } from '../BookListHeader.tsx';

describe('BooksContent', () => {
  it('1. renders loading message when isLoading is true', () => {
    render(<BooksContent />);

    expect(screen.getByText('Loading....')).toBeInTheDocument();
  });

  it('2. renders proper book count', () => {
    const selectedBooksCount = 0;
    const { container } = render(
      <BookListHeader
        totalBooksCount={apiResult.results.length}
        selectedBooksCount={selectedBooksCount}
      />
    );
    const booksElements = container.querySelectorAll('.single-book');
    expect(booksElements.length).toEqual(selectedBooksCount);
  });

  it('3. renders proper book count', () => {
    const setSelectedBooksCount = jest.fn();
    const lastBookRef = jest.fn();
    const { container } = render(
      <BooksList
        books={apiResult.results as any}
        lastBookRef={lastBookRef}
        setSelectedBookCount={setSelectedBooksCount}
      />
    );
    const booksElements = container.querySelectorAll('.single-book');
    expect(booksElements.length).toEqual(apiResult.results.length);
  });
});
