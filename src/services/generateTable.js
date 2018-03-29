import barHorizontal from 'bar-horizontal';

const generateTable = (data) => {
  const inputs = data.reduce((obj, { name, percent }) => {
    obj[name] = percent; // eslint-disable-line no-param-reassign
    return obj;
  }, {});
  barHorizontal(inputs, { labels: true });
};

export default generateTable;
