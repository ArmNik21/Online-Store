const express = require('express');
const { indexView,tortView, searcView, paxpaxakView,kofeView, drajaView,biskvitView, patverView,konfetView } = require('../controllers/IndexController');
const router = express.Router();

/* GET home page. */
router.get('/',indexView );
router.post('/search',searcView);
router.get('/tort',tortView);
router.get('/konfet',konfetView);
router.get('/biskvit',biskvitView);
router.get('/paxpaxak',paxpaxakView);
router.get('/draja',drajaView);
router.get('/kofe',kofeView);
router.get('/patver',patverView)
router.post('/patver',patverView)

module.exports = router;
