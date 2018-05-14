exports.seed = function (knex, Promise) {
  return knex('ideas').del().then(() => {
    return knex('ideas').insert([
      {creator: 'Minh', idea: 'A To Do List app!'},
      {creator: 'Minh', idea: 'A Blog!'},
      {creator: 'Minh', idea: 'A calculator'}
    ])
  })
}
