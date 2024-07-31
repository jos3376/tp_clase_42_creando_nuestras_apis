const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/', actorController.list);

//Rutas exigidas para la creación del CRUD

router.get('/add', actorController.add);
router.post('/create', actorController.create);
router.get('/edit/:id', actorController.edit);
router.get('/detail/:id', actorController.detail);
router.post('/update/:id', actorController.update);
router.get('/delete/:id', actorController.delete);
router.post('/delete/:id', actorController.destroy);

module.exports = router;