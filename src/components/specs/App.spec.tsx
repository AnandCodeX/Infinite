
import { render } from '@testing-library/react';
import App from '../../App.tsx';
import {BooksContent}  from "../BooksContent.tsx"

jest.mock('../BooksContent');

describe('App Component', () => {
  
  it('BooksContent Component mock as called', () => {
    render(<App />);
    expect(BooksContent).toHaveBeenCalled();
  });
});
