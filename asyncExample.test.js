const fetchData = require('./asyncExample');

test('returns a greeting from the server', async () => {
  const data = await fetchData();
  expect(data).toBe('Hello from the server');
})

test('does not return this string', async () => {
  const data = await fetchData();
  expect(data).not.toBe('Something else');
})