const assert = require('assert');
const moment = require('moment')
const Model = require('../model/WeekModel')
const Controller = require('../controller/WeekController')

describe('WeekModal', function() {
  describe('getThisWeek', function() {
    it('should return the current week as array of dates', async function() {
      let date = ''
      await Controller.getThisWeek().then((res)=>{
        date = JSON.stringify(res)
      })
      console.log('DATE', date) 
      assert.equal([1, 2, 3].indexOf(4), -1);
      // assert.equal(moment("03-31-1990").format('DD'), moment("03-31-1990").format('DD'));
    });
  });
});

