exports.seed = function (knex, Promise) {
  return knex('ideas').del().then(() => {
    return knex('ideas').insert([
      {creator: 'Minh', idea: 'This'},
      {creator: 'Minh', idea: 'That'},
      {creator: 'Minh', idea: 'Then'}
    ])
  })
}
