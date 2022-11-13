const FetchAPI = (method) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: method,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

export default FetchAPI;
