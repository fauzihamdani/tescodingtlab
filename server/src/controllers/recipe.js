const { recipe } = require('../../models');

exports.addRecipe = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);

      await recipe.create({
         recipeName: req.body.recipename,
         categoryId: req.body.categoryid,
      });

      res.send({
         status: 'success',
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getRecipe = async (req, res) => {
   try {
      const recipeData = await recipe.findAll();

      res.send({
         status: 'success',
         data: recipeData,
      });
   } catch (error) {
      console.log(error);
   }
};
