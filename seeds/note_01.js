const moment = require('moment')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { title: 'rowValue1', date: moment("02/24/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        { title: 'rowValue2', date: moment("02/25/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        { title: 'rowValue3', date: moment("02/26/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 1 },
        { title: 'rowValue4', date: moment("02/27/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        { title: 'rowValue4', date: moment("02/28/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        { title: 'rowValue5', date: moment("03/01/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 3},
        {  title: 'rowValue1', date: moment("03/02/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        {  title: 'rowValue2', date: moment("03/03/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        {  title: 'rowValue3', date: moment("03/04/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 1 },
        {  title: 'rowValue4', date: moment("03/05/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        {  title: 'rowValue5', date: moment("03/06/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 3},
        {  title: 'rowValue1', date: moment("03/09/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        {  title: 'rowValue2', date: moment("03/10/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        {  title: 'rowValue3', date: moment("03/11/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 1 },
        {  title: 'rowValue4', date: moment("03/12/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 2 },
        {  title: 'rowValue5', date: moment("03/13/2020").format(), note: 'lorem ipsum stuff and fluff', rating: 3}
      ]);
    });
};
