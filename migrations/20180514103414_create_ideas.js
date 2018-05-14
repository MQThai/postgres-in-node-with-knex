export function up (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ideas', table => {
      table.increments('id').primary()
      table.string('idea')
      table.string('creator')
    })
  ])
}

export function down (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('ideas')
  ])
}
