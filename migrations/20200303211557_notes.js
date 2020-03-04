exports.up = function(knex) {
  return knex.schema.createTable('notes', (table)=>{
    table.increments('id');
    table.string('note', 80).notNullable().defaultTo('')
    table.string('title', 80).defaultTo('')
    table.integer('rating')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes')
};
