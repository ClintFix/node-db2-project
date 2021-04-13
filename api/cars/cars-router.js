
const router = require("express").Router();
const Cars = require('./cars-model');

const {checkCarId, checkCarPayload, checkVinNumberValid} = require("./cars-middleware");

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            next(err);
        })
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.account);
})

router.post('/', checkCarPayload, checkVinNumberValid, async (req, res, next) => {
    try {
        const newCar = await Cars.create(req.body);
        res.status(201).json(newCar)
    }
    catch(err) {
        next(err);
    }
})

//Error Handling
router.use((err, _, res,) => {
    res.status(500).json({message: err.message, stack: err.stack });
});

module.exports = router;
