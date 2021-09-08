const express = require('express');

const router = express.Router();

const { addRecipe, getRecipe } = require('../controllers/recipe');
const { getCategory, addCategory } = require('../controllers/category');
const { getIngredient, addIngredient } = require('../controllers/ingredient');
// const { addComment, getComment } = require('../controllers/comment');
// const { insertChat, getChat } = require('../controllers/chat');
// const { addLike } = require('../controllers/like');

// // user api
// router.get('/users', getUser);
// router.get('/user-by-id/:id', authenticated, getUserById);
// router.post('/login', login);
// router.post('/register', registerUser);
// router.delete('/user/:id', authenticated, deleteUser);
// router.patch(
//    '/user/:iduser',
//    authenticated,
//    uploadFile('fileUpload'),
//    updateUser
// );

router.get('/recipe', getRecipe);
router.post('/recipe', addRecipe);

router.get('/ingredient', getIngredient);
router.post('/ingredient', addIngredient);

router.get('/category', getCategory);
router.post('/category', addCategory);
module.exports = router;
