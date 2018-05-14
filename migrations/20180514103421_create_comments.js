export function up (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', table => {
      table.increments('id').primary()
      table.string('comment')
      table.string('creator')
      table.integer('ideas_id').references('ideas.id')
    })
  ])
}

export function down (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
}
