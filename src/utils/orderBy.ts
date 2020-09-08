const orderBy = ({ array, key }): typeof array =>
  array.sort((a, b) => (a[key] > b[key] ? 1 : -1));

export default orderBy;
