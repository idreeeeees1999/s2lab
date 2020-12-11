const cookieParser = require('cookie-parser');
var express = require('express');
var router = express.Router();
var Course = require("../DBmodles/productModel");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let courses= await Course.find();
  res.render('products/productList',{courses});
});

router.get('/add',function(req, res, next) {
  res.render('products/add');
});


//add products
router.post('/add', async function(req, res, next) {
  let course = new Course(req.body);
  await course.save();
  res.redirect('/products');
});

//delet products
router.get('/delete/:id', async function(req, res, next) {
  let course = await Course.findByIdAndDelete(req.params.id);
  res.redirect('/products');
});

//edit product

router.get('/edit/:id', async function(req, res, next) {
  let course = await Course.findById(req.params.id);
  res.render("products/edit" , { course });
  });
router.post('/edit/:id', async function(req, res, next) {
  let course = await Course.findById(req.params.id);
  console.log(course);
  console.log(req.body);
  course.CourseName = req.body.CourseName;
  course.CourseID = req.body.CourseID;
  course.CourseDuration = req.body.CourseDuration;
  course.CourseFee = req.body.CourseFee;
  await course.save();
  res.redirect('/products');
  });


module.exports = router;
