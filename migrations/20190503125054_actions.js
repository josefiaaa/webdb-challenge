exports.up = function(knex, Promise) {
    return knex.schema

    .createTable('actions', table => {
        table
            .increments();

        table
            .string('description', 250)
            .notNullable()

        table
            .string('notes', 250);

        table
            .boolean('completed')
            .defaultTo(false);

        table
            .integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('actions');
};
