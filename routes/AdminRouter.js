const express = require('express');
const router = express.Router();
const {adminView, createArticleView, createTortView, readArticleView, createKonfetView,saveNewTort, saveNewArticle,updateArticleDb, updateArticleView, deleteArticle}=require(`../controllers/AdminController.js`);
const {saveNewKonfet,createBiskvitView, createDrajaView,createKofeView,saveNewKofe, saveNewDraja, saveNewBiskvit,createPaxpaxakView,saveNewPaxpaxak,}=require(`../controllers/AdminController.js`);

const { upload } = require('../middlewares/upload.js');

/* GET home page. */
router.get('/',  adminView);

router.get("/createNorutyun",createArticleView)
router.post("/addNewArticle",upload, saveNewArticle)

router.get("/createTort",createTortView)
router.post("/addNewTort",upload, saveNewTort)

router.get("/createBiskvit",createBiskvitView)
router.post("/addNewBiskvit",upload, saveNewBiskvit)

router.get("/paxpaxakCreate",createPaxpaxakView)
router.post("/addNewPaxpaxak",upload, saveNewPaxpaxak)

router.get("/createKonfet",createKonfetView)
router.post("/addNewKonfet",upload, saveNewKonfet)
 
router.get("/createDraja",createDrajaView)
router.post("/addNewDraja",upload, saveNewDraja)

router.get("/createKofe",createKofeView)
router.post("/addNewKofe",upload, saveNewKofe)







//update article view
router.get(`/updateArticle/:id`,updateArticleView)

//update article db
router.post(`/updateArticle`,upload, updateArticleDb)

//delete

router.get(`/deleteArticle/:id`,deleteArticle)

//read article
router.get("/readArticle/:id",readArticleView)


module.exports = router;
