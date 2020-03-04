const router = require('express').Router()
const controller = require('../controller/WeekController')

router.get('/currentWeek', controller.getThisWeek)

module.exports = router