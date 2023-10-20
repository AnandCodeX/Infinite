export type Author = {
  name: string;
  birth_year: number;
  death_year: number;
};

export type BookType = {
  id: number;
  title: string;
  authors: Author[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Record<string, string>;
  download_count: number;
};
export type BookResultType = {
  count: number;
  next: null | string;
  previous: null | string;
  results: BookType[];
};

export type ErrorType = {
  message?: string;
};
