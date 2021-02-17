const express = require('express');
const db = require("../../data/dbConfig.js");

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruit' });
    });
});

router.post('/', (req, res) => {
  const fruitData = req.body;
  db('cars').insert(fruitData)
    .then(ids => {
      return db('cars').where({ id: ids[0] })
    })
    .then(newCar => {
      res.status(201).json(newCar);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;