const express = require('express');
const db = require("../../data/dbConfig.js");

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'The cars could not be retrieved' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'The car could not be retrieved.' });
    });
});

router.post('/', (req, res) => {
  const newCar = req.body;
  db('cars').insert(newCar)
    .then(ids => {
      return db('cars').where({ id: ids[0] })
    })
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "The car could not be added." });
    });
});

module.exports = router;