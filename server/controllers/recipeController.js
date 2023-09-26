require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
/***
 * GET /
 * Homepage
 */


exports.homepage = async(req, res) => {
   try {
      
      const limitNumber = 5;
      const catLimit = 15;
      const categories = await Category.find({}).limit(limitNumber);
      
      const latest = await Recipe.find({}).sort({_id: -1 }).limit(catLimit);

      const food = { latest }

      res.render("index", { title: "Home - Cooked with love", categories, food }); 
   } catch (error) {
      res.status(500).send({message: error.message || "Error Occured"});
   }
}



/***
 * GET /catergories
 * Categories
 */


exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", { title: "Categories - Cooked with love", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};


