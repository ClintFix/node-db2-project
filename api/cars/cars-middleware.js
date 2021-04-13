const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

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
  const {vin, make, model, mileage} = req.body;
  switch(true) {
    case (!vin):
      res.status(400).json({message: `vin is missing`})
      break;
    case (!make):
      res.status(400).json({message: `make is missing`})
      break;
    case (!model):
      res.status(400).json({message: `model is missing`})
      break;
    case (!mileage):
      res.status(400).json({message: `mileage is missing`})
      break;
    default:
      next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  const {vin} = req.body;
  if (vinValidator.validate(vin)) {
    next();
  } else {
    res.status(400).json({message: `vin ${vin} is invalid`});
  }
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
