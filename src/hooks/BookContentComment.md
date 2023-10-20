/**
 * This component represents the content of a page that displays books.
 * It consists of several hooks and components to handle book data and rendering.
 */

// Import necessary dependencies
import React, { useState, useRef, useCallback } from 'react';
import { useBooks } from './useBooks';
import { BookListHeader } from './BookListHeader';
import { BooksList } from './BooksList';

// Define the BooksContent component
export const BooksContent = () => {
  // Set up state variables using the useState hook
  const [selectedBooksCount, setSelectedBooksCount] = useState(0); // Keeps track of the number of selected books
  const [pageNum, setPageNum] = useState(1); // Keeps track of the current page number

  // Fetch book data using the useBooks custom hook and store the returned values in variables
  const { isLoading, isError, error, results, hasNextPage } = useBooks(pageNum);

  // Create a ref using the useRef hook to hold an instance of the IntersectionObserver class
  const intObserver = useRef<IntersectionObserver | null>();

  // Create a callback function using the useCallback hook that takes in a book element and performs tasks related to infinite scrolling
  const lastBookRef = useCallback(
    (book: HTMLDivElement | null) => {
      // If still loading, return early without doing anything else
      if (isLoading) return;

      // If there is an existing instance of IntersectionObserver, disconnect it
      if (intObserver.current) intObserver.current.disconnect();

      // Set the current IntersectionObserver instance to a new instance of IntersectionObserver,
      // which triggers a callback function when the target book element intersects with another element, indicating that the user is near the end of the book list
      intObserver.current = new IntersectionObserver((books) => {
        // If the observed book element is intersecting with another element and there are more pages to load, update the current page number by incrementing it by 1
        if (books[0].isIntersecting && hasNextPage) {
          console.log('We are near the last book!');
          setPageNum((prev) => prev + 1);
        }
      });

      // If a valid book element is passed as an argument, start observing it using the IntersectionObserver instance
      if (book) intObserver.current.observe(book);
    },
    [isLoading, hasNextPage], // Only recreate the callback function if isLoading or hasNextPage changes
  );

  // If there is an error, render an error message
  if (isError) return <p className="center">Error: {error.message}</p>;

  // Render the main content of the BooksContent component
  return (
    <div className="main-div">
      <div className="main-book">
        {/* Render the BookListHeader component */}
        <BookListHeader
          totalBooksCount={results.length} // Pass in the total number of books
          selectedBooksCount={selectedBooksCount} // Pass in the number of selected books
        />

        {/* Render the BooksList component */}
        <BooksList
          books={results} // Pass in the array of book objects
          lastBookRef={lastBookRef} // Pass in the callback function for infinite scrolling
          setSelectedBookCount={setSelectedBooksCount} // Pass in the function to update the selected book count
        />

        {/* Render a loading indicator if still loading */}
        {isLoading ? <div>Loading....</div> : null}
      </div>
    </div>
  );
};
