/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
     id: 1,
     name: 'Elon Musk',
     email: 'elonmusk@mail.com'
    },
    {
      id: 2,
      name: 'Kim Dotcom',
      email: 'kimdotcom@mail.com'
     },
     {
      id: 3,
      name: 'Peter Thiel',
      email: 'peterthiel@mail.com'
     }
  ]);
};
