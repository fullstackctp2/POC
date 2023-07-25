const create = (db, data) => {
  try {
    return new db(data).save();
  } catch (error) {
    throw error;
  }
};

const findOne = (db, query) => {
  try {
    return db.findOne(query);
  } catch (error) {
    throw error;
  }
};

const update = (db, query, data) => {
  try {
    return db.updateOne(query, data);
  } catch (error) {
    throw error;
  }
};

const deleteOne = (db, query) => {
  try {
    return db.deleteOne(query);
  } catch (error) {
    throw error;
  }
};

const insertMany = (db, data) => {
  try {
    return db.insertMany(data);
  } catch (error) {
    throw error;
  }
};

const find = (db, query) => {
  try {
    console.log({query})
    return db.find(query)
  } catch (error) {
    throw error;
  }
};

module.exports = { create, findOne, deleteOne, update, insertMany,find };
