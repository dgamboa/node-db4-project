const db = require('../data/db-config');

// Shape of database return
// [
//   {
//       "created_at": "2021-01-01 08:23:19.120",
//       "ingredient_id": null,
//       "ingredient_name": null,
//       "quantity": null,
//       "recipe_id": 1,
//       "recipe_name": "Spaghetti",
//       "step_id": 1,
//       "step_instruction": "Boil up water",
//       "step_number": 1
//   },
//   {
//       "created_at": "2021-01-01 08:23:19.120",
//       "ingredient_id": 1,
//       "ingredient_name": "Pasta",
//       "quantity": 1,
//       "recipe_id": 1,
//       "recipe_name": "Spaghetti",
//       "step_id": 2,
//       "step_instruction": "Insert pasta into water",
//       "step_number": 2
//   },
//   {
//       "created_at": "2021-01-01 08:23:19.120",
//       "ingredient_id": 3,
//       "ingredient_name": "Sauce",
//       "quantity": 2.5,
//       "recipe_id": 1,
//       "recipe_name": "Spaghetti",
//       "step_id": 3,
//       "step_instruction": "Mix pasta with sauce",
//       "step_number": 3
//   }
// ]

const getById = async (recipe_id) => {
  const recipeData = await db('recipes as r')
    .column(
      'r.recipe_id',
      'r.recipe_name',
      'r.created_at',
      's.step_id',
      's.step_instruction',
      's.step_number',
      'si.quantity',
      'i.ingredient_id',
      'i.ingredient_name',
      'si.quantity'
    )  
    .join('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('steps_ingredients as si','s.step_id', 'si.step_id')
    .leftJoin('ingredients as i','si.ingredient_id', 'i.ingredient_id')
    .where('r.recipe_id', recipe_id)
  
  return recipeData
};

module.exports = { getById }