import { getBooksByPage } from '../../api/getBooksByPage.ts';
import { apiResult } from './fixtures/apiResult.ts';

const originalFetch = global.fetch;
describe('getBooksByPage', () => {
  it('1. getBooksByPage fetches data from the correct URL', async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(apiResult),
        }) as Promise<Response>,
    );
    const mockData = apiResult;
    const pageNumber = 1;

    const result = await getBooksByPage(pageNumber);

    expect(result).toEqual(mockData);
    global.fetch = originalFetch;
  });
});
