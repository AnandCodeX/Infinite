import { useEffect, useState } from 'react';
import { getBooksByPage } from '../api/getBooksByPage.ts';
import { BookResultType, BookType, ErrorType } from '../components/type.ts';

/**
 * fetches a list of books from an API based on the provided page number. It manages the state of the fetched data, loading status, error status, and pagination.
 * pageNumber:api page number of the books to fetch.
 */
const useBooks = (pageNumber) => {
  const [results, setResults] = useState<BookType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<ErrorType>({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;
    getBooksByPage(pageNumber, { signal })
      .then((data: BookResultType) => {
        console.log('this is data', data);
        setResults((prev) => [...prev, ...data.results]);
        setHasNextPage(data.next !== null);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [pageNumber]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default useBooks;
