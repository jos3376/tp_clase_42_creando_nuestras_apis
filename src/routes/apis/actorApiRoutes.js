const router = require('express').Router()

const actorApiController = require('../../controllers/apis/actorApiController')

router.get('/api/actors', actorApiController.list)
router.get('/api/actors/:id', actorApiController.detail)

router.post('/api/actors/create', actorApiController.create)
router.delete('/api/actors/delete/:id', actorApiController.destroy)

module.exports = router;