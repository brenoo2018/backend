import Knex from 'knex';
export async function up(knex: Knex) {
  return knex.schema.createTable('todos', table => {
    table.uuid('uuid').primary();
    table.string('task').notNullable();
    table.uuid('user_uuid').notNullable().references('uuid').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('todos');
}
