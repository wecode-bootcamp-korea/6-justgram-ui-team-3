export const getFeedData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(fetch('../data/feeds.json'));
    }, Math.random() * 3000);
  });
