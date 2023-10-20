import { render } from '@testing-library/react';
import { SingleBook } from '../SingleBook.tsx';
import { sampleBook1 } from './fixtures/sampleBook1.tsx';

describe('SingleBook', () => {
  it('1. should render a single book with all its details', () => {
    const { container } = render(<SingleBook bookDetail={sampleBook1} />);
    const singleBook = container.querySelector('.single-book');
    const singleBookCard = container.querySelector('.single-book-card');
    const checkbox = container.querySelector('input[type="checkbox"]');
    const image = container.querySelector('.single-book-image');
    const title = container.querySelector('.book-info .book-title-name');
    const bookAuthor = container.querySelector('.book-info .book-author');

    expect(singleBook).toBeInTheDocument();
    expect(singleBookCard).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(image).toHaveAttribute('src', sampleBook1.formats['image/jpeg']);
    expect(title).toHaveTextContent(sampleBook1.title);
    expect(bookAuthor).toHaveTextContent(sampleBook1.authors[0].name);
  });
});
