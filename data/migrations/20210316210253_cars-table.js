
exports.up = function(knex) {
  return knex.schema
    .createTable('cars', table => {
        table.increments('car_id')
        table.integer('VIN', 17).unique().notNullable()
        table.text('Make', 128).notNullable()
        table.text('Model', 128).notNullable()
        table.integer('Mileage').notNullable()
        table.text('TransmissionType', 128)
        table.text('TitleStatus', 128)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cars')
};
