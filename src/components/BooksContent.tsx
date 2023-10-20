import useBooks from '../hooks/useBooks.tsx';
import { useCallback, useRef, useState } from 'react';
import { BooksList } from './BooksList.tsx';
import { BookListHeader } from './BookListHeader.tsx';

export const BooksContent = () => {
  const [selectedBooksCount, setSelectedBooksCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, results, hasNextPage } = useBooks(pageNum);
  const intObserver = useRef<IntersectionObserver | null>();
  const lastBookRef = useCallback(
    (book: HTMLDivElement | null) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((books) => {
        if (books[0].isIntersecting && hasNextPage) {
          console.log('We are near the last book!');
          setPageNum((prev) => prev + 1);
        }
      });

      if (book) intObserver.current.observe(book);
    },
    [isLoading, hasNextPage],
  );
  if (isError) return <p className="center">Error: {error.message}</p>;

  return (
    <div className="main-div">
      <div className="main-book">
        <BookListHeader
          totalBooksCount={results.length}
          selectedBooksCount={selectedBooksCount}
        />
        <BooksList
          books={results}
          lastBookRef={lastBookRef}
          setSelectedBookCount={setSelectedBooksCount}
        />
        {isLoading ? <div>Loading....</div> : null}
      </div>
    </div>
  );
};
