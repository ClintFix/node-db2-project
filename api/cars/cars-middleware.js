const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  const {id} = req.params;
  Cars.getById(id)
    .then(account => {
      if (account) {
        req.account = account;
        next();
      } 
      else {
        res.status(404).json({message: `car with id ${id} is not found`});
      }
    })
    .catch(err => next(err));
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
