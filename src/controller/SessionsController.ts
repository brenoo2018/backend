import { Request, Response } from 'express';

import { sign } from 'jsonwebtoken';
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

    const token = sign({}, '8346c2c23b70ba17f6c03c8697427a99', {
      subject: checkUsersExists.uuid,
      expiresIn: '1d',
    }); //desafiotodolist2T

    return response.json({ checkUsersExists, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
