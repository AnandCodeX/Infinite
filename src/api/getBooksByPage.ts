const baseURL = 'https://gutendex.com/books';
// export const api = axios.create({
//   baseURL,
// });

export const getBooksByPage = async (pageNumber = 1, options = {}) => {
  const response = await fetch(`${baseURL}/?page=${pageNumber}`, options);
  return await response.json();
};
