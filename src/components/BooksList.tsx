import { SingleBook } from './SingleBook.tsx';
import { BookType } from './type.ts';

type BooksListPropsType = {
  books: BookType[];
  lastBookRef: (book: HTMLDivElement | null) => void;
  setSelectedBookCount: React.Dispatch<React.SetStateAction<number>>;
};

export const BooksList = ({
  books,
  lastBookRef,
  setSelectedBookCount,
}: BooksListPropsType) => {
  const handleChange = (event) => {
    setSelectedBookCount((x) => x + (event.target.checked ? 1 : -1));
  };
  return (
    <div className="books-list">
      {books.map((book, i) => {
        const refData = i === books.length - 1 ? { ref: lastBookRef } : {};
        return (
          <SingleBook
            key={book.id}
            bookDetail={book}
            {...refData}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};
