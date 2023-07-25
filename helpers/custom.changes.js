const dataCustomChanges = (data) => {
  return data.map((item) => {
    let name = item.title;
    delete item.id;
    return { ...item, name };
  });
};

module.exports = { dataCustomChanges };
