const getUserName = require('./asyncExample2');

test('returns a user name if id is 1', async () => {
  const userName = await getUserName(1);
  expect(userName).toBe("Alice");
})

test('returns error message if id is not 1', async () => {
  await expect(getUserName(!1)).rejects.toMatch("User not found.");
})