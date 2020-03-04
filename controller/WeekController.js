const Model = require('../model/WeekModel.js')
const moment = require('moment')

class WeekController{

  static getThisWeek(req, res, next){
    console.log('controller')
    let thisWeek = moment().week()
    let weekStart = moment().day("Monday").week(thisWeek).format();
    let weekEnd = moment().day("Friday").week(thisWeek).format();

    Model.getThisWeek(weekStart, weekEnd).then(weekNotes => {
      console.log('model res', weekNotes)
      res.json({weekNotes})

    })
  }
}

module.exports = WeekController;