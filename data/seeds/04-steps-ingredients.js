
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        {quantity: 2.5, step_id: 3, ingredient_id: 3},
        {quantity: 0.5, step_id: 4, ingredient_id: 3},
      ]);
    });
};
