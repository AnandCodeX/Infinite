export type BookListHeaderProps = {
  totalBooksCount: number;
  selectedBooksCount: number;
};
export const BookListHeader = ({
  totalBooksCount,
  selectedBooksCount,
}: BookListHeaderProps) => {
  return (
    <div className="main-header">
      <header className="book-header">
        <h2>Books</h2>
      </header>
      <div className="book-count">
        <h4 className="book-content">
          {totalBooksCount} Books ({selectedBooksCount} selected)
        </h4>
        <button className="clear-button">clear selection</button>
      </div>
    </div>
  );
};
