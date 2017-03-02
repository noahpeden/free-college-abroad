import reducer from '../../src/reducers/index'

describe('countries reducer', () => {
  it('should return the initial state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })
})
