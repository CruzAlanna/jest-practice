function getUserName(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
      resolve("Alice");
      } else {
        reject("User not found.");
      }
    }, 500);
  });
}

module.exports = getUserName;