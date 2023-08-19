function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = "Async data";
    callback(data);
  }, 1000);
}

fetchDataWithCallback((data) => {
  console.log(data);
});
