const router = require('express').Router();

const movieApiController = require('../../controllers/apis/movieApiController');

router.post('/api/movies', movieApiController.create);
router.delete('/api/movies/:id', movieApiController.destroy)

module.exports = router;