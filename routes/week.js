const router = require('express').Router()
const controller = require('../controller/WeekController')

router.get('/currentWeek', controller.getThisWeek)
router.post('/nextWeek', controller.getNextWeek)
router.post('/lastWeek', controller.getLastWeek)

module.exports = router