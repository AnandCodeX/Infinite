import { render, screen } from '@testing-library/react';
import { BookListHeader } from '../BookListHeader.tsx';

describe('BookListHeader', () => {
  it('1. renders default total and selectedCount', () => {
    const totalBooksCount = 0;
    const selectedBooksCount = 1;
    const { container } = render(
      <BookListHeader
        totalBooksCount={totalBooksCount}
        selectedBooksCount={selectedBooksCount}
      />,
    );
    const ele = container.querySelector('.book-count h4');
    expect(ele).toHaveTextContent(
      `${totalBooksCount} Books (${selectedBooksCount} selected)`,
    );
  });
  it('2. renders default text', () => {
    const totalBooksCount = 0;
    const selectedBooksCount = 0;
    const { container } = render(
      <BookListHeader
        totalBooksCount={totalBooksCount}
        selectedBooksCount={selectedBooksCount}
      />,
    );
    const ele = container.querySelector('.book-content');
    expect(ele).toHaveTextContent(
      `${totalBooksCount} Books (${selectedBooksCount} selected)`,
    );
  });
});
