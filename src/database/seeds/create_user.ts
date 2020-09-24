import Knex from 'knex';
import { uuid } from 'uuidv4';
import { hash } from 'bcryptjs';

export async function seed(knex: Knex) {
  const hashedPassword = await hash('123456', 8);
  await knex('users').insert([
    {
      uuid: uuid(),
      username: 'usuarioteste',
      email: 'usuarioteste@gmail.com',
      password: hashedPassword,
    },
  ]);
}
