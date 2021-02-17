
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.text('VIN', 17).unique().notNullable()
      table.text('make', 128).notNullable()
      table.text('model', 128).notNullable()
      table.integer('mileage').notNullable()
      table.text('transmission type', 128)
      table.text('title status', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
