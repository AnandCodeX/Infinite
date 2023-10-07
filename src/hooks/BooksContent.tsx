import useBooks from './useBooks';
import { useCallback, useRef, useState } from 'react';

import { BooksList } from '../BooksList';

export const BooksContent = () => {
  const [selectedBookCount, setSelectedBookCount] = useState(0);
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
        <div className="main-header">
          <header className="book-header">
            <h2>Books</h2>
          </header>
          <div className="book-count">
            <h4>
              {results.length} Books ({selectedBookCount} selected)
            </h4>
            <button className="clear-button">clear selection</button>
          </div>
        </div>
        <BooksList
          books={results}
          lastBookRef={lastBookRef}
          setSelectedBookCount={setSelectedBookCount}
        />
        {isLoading ? <div>Loading....</div> : null}
      </div>
    </div>
  );
};
