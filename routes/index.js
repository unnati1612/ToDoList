const express=require('express');
const router= express.Router();
const homeController = require('../controllers/home_controller');
// const create = require('../controllers/create');

console.log('home router is up and running');


router.get('/',homeController.home);

router.get('/deletetodo',homeController.delete);
// router.post('/createtodo',homeController.create);

module.exports =router; 