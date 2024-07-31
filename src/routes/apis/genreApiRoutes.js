const router = require('express').Router();

const genresApiController = require('../../controllers/apis/genresApiController');


router.get('/api/genres', genresApiController.list);
router.get('/api/genres/:id', genresApiController.detail)

module.exports = router;