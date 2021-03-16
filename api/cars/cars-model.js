const db = require('../../data/config-db')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('cars')
}

function findById(id) {
    return db('cars').where('car_id', id).first()
}

async function add(car) {
   const [id] = await db('cars').insert(car)
   return findById(id)
}