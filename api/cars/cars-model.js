const db = require('../../data/db-config');

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where('id', id).first();
};

const create = async (newCar) => {
  const [id] = await db("cars").insert(newCar); //returns id of new car in array
  return getById(id);
};

const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
