const { ingredient } = require('../../models');

exports.addIngredient = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);

      await ingredient.create({
         ingredientsData: req.body.ingredientdata,
         recipeId: req.body.recipeid,
      });

      res.send({
         status: 'success',
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getIngredient = async (req, res) => {
   try {
      const ingredientData = await ingredient.findAll();

      res.send({
         status: 'success',
         data: ingredientData,
      });
   } catch (error) {
      console.log(error);
   }
};
