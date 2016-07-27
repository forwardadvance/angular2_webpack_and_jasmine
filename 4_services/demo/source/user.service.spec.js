var UserService = require('./user.service');

describe('userService', () => {
  it('should get a user', () => {
    expect(new UserService().get().name).toBe("Jerry");
  })
})
