import { forwardRef } from 'react';
import { BookType } from './type';

type SingleBookPropsType = {
  bookDetail: BookType;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const SingleBook = forwardRef<HTMLDivElement, SingleBookPropsType>(
  ({ bookDetail, handleChange }, lastBookRef) => {
    const refData = lastBookRef ? { ref: lastBookRef } : {};

    return (
      <article className="single-book" {...refData}>
        <div className="single-book-card">
          <input
            value={bookDetail.id}
            type="checkbox"
            onChange={handleChange}
          />
          <img
            className="single-book-image"
            src={bookDetail.formats['image/jpeg']}
          />
          <div className="book-info">
            <h4 className="book-title-name">{bookDetail.title}</h4>
            <p className="book-author">{bookDetail.authors[0]?.name ?? ''}</p>
          </div>
        </div>
      </article>
    );
  },
);
