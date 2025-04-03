function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from the server");
    }, 1000);
  });
}

module.exports = fetchData;