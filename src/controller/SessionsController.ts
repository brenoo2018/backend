import { Request, Response } from 'express';

import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import authConfig from '../config/auth';

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

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: checkUsersExists.uuid,
      expiresIn,
    });

    return response.json({ user: checkUsersExists, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
