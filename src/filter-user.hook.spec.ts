import { renderHook, act } from '@testing-library/react-hooks';
import * as api from './api';
import { useFilterUsers } from './filter-user.hooks';
import { getUsersByFilter } from './api';

describe('useFilterUsers specs', () => {
  // it('should call getUsersByFilter and update users when it feeds filter equals "doe"', async () => {
  //   // Arrange
  //   const filter = 'doe';
  //   const getUsersByFilterSpy = jest
  //     .spyOn(api, 'getUsersByFilter')
  //     .mockResolvedValue(['John Doe', 'Jane Doe']);
  //   // Act
  //   const { result, waitForNextUpdate } = renderHook(() =>
  //     useFilterUsers(filter)
  //   );
  //   // Assert
  //   act(() => result.current.setFilter(filter));
  //   await waitForNextUpdate();

    // expect(getUsersByFilterSpy).toHaveBeenCalledTimes(1);
  // });
});
