// Router for /results api calls
const router = require('express').Router()

// controllers
const romanAction = require('../controllers/roman-numerals-controllers');

module.exports = router

router.post('/', (req, res, next) => {
    try {
        const resultPayload = romanAction(req.body.payload, res);
        res.status(200).send(resultPayload);
    } catch (e) {
        console.log('caught in backend:', e)
        next(e);
    }
});
