import { Request, Response } from 'express';

import { uuid } from 'uuidv4';
import { hash } from 'bcryptjs';
import knex from '../database/connection';

export async function create(request: Request, response: Response) {
  try {
    const { username, email, password } = request.body;

    const checkUsersExists = await knex('users').where({ email }).first();

    if (checkUsersExists) {
      return response.json({ message: 'User already exists' });
    }

    const passwordHash = await hash(password, 8);

    await knex('users').insert({
      uuid: uuid(),
      username,
      email,
      password: passwordHash,
    });

    return response.json({ message: 'Success' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
