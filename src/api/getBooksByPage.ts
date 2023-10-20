const baseURL = 'https://gutendex.com/books';

export const getBooksByPage = async (pageNumber = 1, options = {}) => {
  let page = pageNumber;
  if (page < 1) page = 1;
  const response = await fetch(`${baseURL}/?page=${page}`, options);
  return await response.json();
};
