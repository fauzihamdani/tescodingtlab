const { category } = require('../../models');

exports.addCategory = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);

      await category.create({
         categoryName: req.body.categoryname,
      });

      res.send({
         status: 'success',
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getCategory = async (req, res) => {
   try {
      const categoryData = await category.findAll();

      res.send({
         status: 'success',
         data: categoryData,
      });
   } catch (error) {
      console.log(error);
   }
};
