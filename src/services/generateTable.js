import barHorizontal from 'bar-horizontal';

const generateTable = (data) => {
  const inputs = data.reduce((obj, { name, percent }) => {
    obj[name] = percent;
    return obj;
  }, {});
  barHorizontal(inputs, { labels: true });
};

export default generateTable;
