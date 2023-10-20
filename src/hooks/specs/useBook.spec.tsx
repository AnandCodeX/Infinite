import { renderHook } from '@testing-library/react';

import { apiResult } from '../../components/specs/fixtures/apiResult.ts';
import useBooks from '../useBooks.tsx';

describe('useBook', () => {
  it('1. should fetch books data from API and update state', async () => {
    const mockGetBooksByPage = jest.fn().mockResolvedValue(apiResult);
    jest.mock('../../api/getBooksByPage.ts', () => ({
      getBooksByPage: mockGetBooksByPage,
    }));

    const { result } = renderHook(() => useBooks(1));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.error).toEqual({});
    expect(result.current.results).toEqual([]);
    expect(result.current.hasNextPage).toBe(false);
  });
});
