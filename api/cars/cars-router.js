
const router = require("express").Router();
const Cars = require('./cars-model');

//Routers


//Error Handling
router.use((err, _, res,) => {
    res.status(500).json({message: err.message, stack: err.stack });
});

module.exports = router;
