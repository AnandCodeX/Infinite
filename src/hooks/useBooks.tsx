import { useEffect, useState } from 'react';

import { getBooksByPage } from '../api/getBooksByPage';
import { BookResultType, BookType, ErrorType } from '../type';

const useBooks = (pageNum = 1) => {
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

    getBooksByPage(pageNum, { signal })
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
  }, [pageNum]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default useBooks;
