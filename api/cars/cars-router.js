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

router.get('/:id', async (req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        if(!car) {
            res.status(404).json({
                message: 'The car with the given id does not exist.'
            })
        } else {
            res.status(200).json(car)
        }
    } catch (err) {
        res.status(500).json({
            message: 'The car could not be retrieved.',
            actualError: err
        })
    }
})

router.post('/', async (req, res) => {
    const { VIN, Make, Model, Mileage } = req.body
    if(!VIN || !Make || !Model || !Mileage) {
        res.status(400).json({
            message: 'VIN, Make, Model, and Mileage are required fields.'
        })
    } else {
        try{
            const newCar = await Car.add(req.body)
            res.status(201).json(newCar)
        } catch (err) {
            res.status(500).json({
                message: 'The car could not be added to the database',
                actualError: err
            })
        }
    }
})

router.put('/:id', async (req, res) => {
    const { VIN, Make, Model, Mileage } = req.body
    if(!VIN || !Make || !Model || !Mileage) {
        res.status(400).json({
            message: 'VIN, Make, Model, and Mileage are required fields.'
        })
    } else {
        try{
            const validId = await Car.findById(req.params.id)
            if(!validId) {
                res.status(404).json({
                    message: 'The car with the given id does not exist.'
                })
            } else {
                const car = await Car.update(req.params.id, req.body)
                res.status(200).json(car)
            }
        } catch (err) {
            res.status(500).json({
                message: 'The car could not be updated',
                actualError: err
            })
        }
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try{
        const removedCar = await Car.findById(id)
        if(!removedCar) {
            res.status(404).json({
                message: 'The car with a given ID does not exist.'
            })
        } else {
            const deleteCar = await Car.remove(id)
            res.status(200).json(removedCar)
        }
    } catch (err) {
        res.status(500).json({
            message: 'The car could not be deleted',
            actualError: err.message
        })
    }
})

module.exports = router