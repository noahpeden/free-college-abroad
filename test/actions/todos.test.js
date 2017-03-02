import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to store info from the database', () => {
    const expectedAction = {
      type: 'COUNTRY',
    }
    expect(actions.country()).toEqual(expectedAction)
  })
})
