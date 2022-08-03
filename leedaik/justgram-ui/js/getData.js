const getData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(fetch('../data/feeds.json'));
    }, Math.random() * 3000);
  });

export default getData;
