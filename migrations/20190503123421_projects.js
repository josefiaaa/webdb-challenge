exports.up = function(knex, Promise) {

  return knex.schema
  
    .createTable('projects', table => {
        table
            .increments();

        table
            .string('name', 140)
            .unique()
            .notNullable();

        table
            .string('description', 260)
            .notNullable();

        table
            .boolean('completed')
            .defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects');
};
