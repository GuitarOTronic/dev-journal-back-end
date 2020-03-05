const Model = require('../model/WeekModel.js')
const moment = require('moment')

class WeekController {

  static getLastWeek(req, res, next) {
    let startDate = moment(req.body.startDate).subtract(7, 'days').format("MM/DD/YYYY")
    let endDate = moment(req.body.endDate).subtract(7, 'days').format("MM/DD/YYYY")

    Model.getWeek(startDate, endDate).then(weekNotes => {
      console.log('weeknotes', weekNotes.length, weekNotes)
      if(weekNotes.length < 5) {
        if(weekNotes.length){
          // fill in gaps
        }
        else{
          const weekArray = []
          let numOfDays = 0
          while(numOfDays < 5){
            weekArray.push(moment(startDate).add(numOfDays, "days").format("MM/DD/YYYY"))
            numOfDays++;
          }
          weekNotes = weekArray.map((date, i) =>{
            return { 
              id: `empty-${i}`,
              note: '',
              title: '',
              rating: 0,
              date: date,
              created_at: null
            }
          })
        }
      }
      res.json({ weekNotes })
    })
  }

  static getNextWeek(req, res, next) {
    let startDate = moment(req.body.startDate).add(7, 'days').format("MM/DD/YYYY")
    let endDate = moment(req.body.endDate).add(7, 'days').format("MM/DD/YYYY")

    Model.getWeek(startDate, endDate).then(weekNotes => {
      console.log('weeknotes', weekNotes.length, weekNotes)
      res.json({ weekNotes })
    })
  }

  static getThisWeek(req, res, next) {
    let thisWeek = moment().week()
    let weekStart = moment().day("Monday").week(thisWeek).format();
    let weekEnd = moment().day("Friday").week(thisWeek).format();

    Model.getWeek(weekStart, weekEnd).then(weekNotes => {
      res.json({ weekNotes })
    })
  }

  static createThisWeek(req, res, next){

  }

}

module.exports = WeekController;