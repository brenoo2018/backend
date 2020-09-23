import { Request, Response } from 'express';

import { uuid } from 'uuidv4';
import { compare } from 'bcryptjs';
import knex from '../database/connection';

export async function create(request: Request, response: Response) {
  try {
    const { email, password } = request.body;

    const checkUsersExists = await knex('users').where({ email }).first();

    if (!checkUsersExists) {
      return response.json({ message: 'Incorrect email/password combination' });
    }

    const passwordMatch = await compare(password, checkUsersExists.password);

    if (!passwordMatch) {
      return response.json({ message: 'Incorrect email/password combination' });
    }

    delete checkUsersExists.password;

    //usuário autenticado

    return response.json(checkUsersExists);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
