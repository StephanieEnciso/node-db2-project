const db = require('../../data/config-db')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
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

async function update(id, car) {
    await db('cars').where('car_id', id).update(car)
    const newCar = await db('cars').where('car_id', id).first()
    return newCar
}

function remove(id) {
    return db('cars').where('car_id', id).del()
}