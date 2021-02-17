
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.integer('VIN', 17).unique().notNullable()
      table.text('make', 128).notNullable()
      table.text('model', 128).notNullable()
      table.integer('mileage').notNullable()
      table.text('transmissionType', 128)
      table.text('titleStatus', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
