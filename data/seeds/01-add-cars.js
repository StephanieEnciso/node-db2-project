
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {VIN: 147852369, make: "infiniti", model: "G36", mileage: 223657, transmissionType: "V6"},
        {VIN: 963258741, make: "nissan", model: "altima", mileage: 87201, titleStatus: "salvage"},
        {VIN: 123456789, make: "chevy", model: "silverado", mileage: 199890, transmissionType: "V8", titleStatus: "clean" }
      ]);
    });
};
