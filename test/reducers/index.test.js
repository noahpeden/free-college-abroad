import reducer from '../../src/reducers/index'
import regionsReducer from '../../src/reducers/index'

describe('countries reducer', () => {
  it('should accept action COUNTRIES', () => {
      const action = {
        type: 'COUNTRIES',
      };
      expect(regionsReducer([], action)).toEqual([]);
    });
});
