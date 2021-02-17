
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 123456789, make: "chevy", model: "silverado", mileage: 154000, transmissionType: "V8", titleStatus: "clean" },
        {VIN: 147852369, make: "infiniti", model: "G36", mileage: 97012, transmissionType: "V6", titleStatus: "salvage" },
        {VIN: 963258741, make: "nissan", model: "altima", mileage: 63785 }
      ]);
    });
};
