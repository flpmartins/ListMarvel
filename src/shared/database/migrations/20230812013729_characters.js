/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.text('name').notNullable()
    table.text('description')
    table.json('characters')

    table.integer('user_id').unsigned().notNullable()
    table.foreign('user_id').references('id').inTable('users')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('characters')
}
