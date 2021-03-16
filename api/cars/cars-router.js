const express = require('express')

const Car = require('./cars-model')

const router = express.Router()

router.get('/', (req, res) => {
    Car.find()
      .then(cars => {
          res.status(200).json(cars)
      })
      .catch(err => {
          res.status(500).json({
              message: 'Could not retrieve all cars',
              actualError: err
          })
      })
})

module.exports = router