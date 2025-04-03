function fetchDataWithError(shouldReject) {
  return new Promise((resolve, reject) => {
    if (shouldReject) {
      reject("Error, something went wrong");
    } else {
      resolve("Hello from the server");
    }
  })
}

module.exports = fetchDataWithError;