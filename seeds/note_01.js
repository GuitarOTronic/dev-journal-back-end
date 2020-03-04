const moment = require('moment')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { id: 1, title: 'rowValue1', note: 'lorem ipsum stuff and fluff', rating: 2 },
        { id: 2, title: 'rowValue2', note: 'lorem ipsum stuff and fluff', rating: 2 },
        { id: 3, title: 'rowValue3', note: 'lorem ipsum stuff and fluff', rating: 1 },
        { id: 4, title: 'rowValue4', note: 'lorem ipsum stuff and fluff', rating: 2 },
        { id: 5, title: 'rowValue5', note: 'lorem ipsum stuff and fluff', rating: 3, created_at: moment('03/31/1990') }
      ]);
    });
};
