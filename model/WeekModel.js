const db = require('../knex/knex.js')

class WeekModel {

  static getWeek(startDate, endDate){
    return db('notes')
      .where('date', '>=', startDate)
      .where('date', '<=', endDate)
  }
   
  // static deleteEntryPhotos(trip_entry_id){
  //   return db('pics')
  //     .del()
  //     .where({trip_entry_id})
  //     .returning('*')
  // }

  // static getFellowEntryPhotos(trip_entry_id) {
  //   return db('pics')
  //     .where({trip_entry_id})
  //     .select('public_id')
  //     .returning('*')
  // }

  // static getAllTripPhotos(id){
  //   return db('pics')
  //     .where({'trip_id':id})
  //     .select('public_id')
  //     .returning('*')
  // }

  // static getTripPhotos(id){
  //   return db('pics')
  //     .where({trip_entry_id:id})
  //     .returning('*')

  // }

  // static getTripEntryPhotos(id){
  //   return db('pics')
  //     .where({trip_entry_id:id})
  //     .returning('*')
  // }

}

module.exports = WeekModel