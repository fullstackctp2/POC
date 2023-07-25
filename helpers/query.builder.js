const queryBuilder = (query) => {
  const { name, category, price_from, price_to } = query;
  const setquery = {};
  if (name) setquery.name = name;
  if (category) setquery.category = category;
  if (price_from) setquery.price = { $gte: price_from };
  if (price_to) setquery.price = { ...setquery.price, $lte: price_to };
  return setquery;
};

module.exports = { queryBuilder };
