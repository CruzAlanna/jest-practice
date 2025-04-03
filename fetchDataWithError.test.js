const fetchDataWithError = require('./fetchDataWithError');

test('resolves with the correct message from the server', async () => {
  const data = await fetchDataWithError(false);
  expect(data).toBe('Hello from the server');
})


test('rejects with an error message', async () => {
  await expect(fetchDataWithError(true)).rejects.toMatch('Error, something went wrong');
})