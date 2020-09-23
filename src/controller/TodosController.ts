import { Request, Response } from 'express';

import { isUuid, uuid as funcUuid } from 'uuidv4';
import { hash } from 'bcryptjs';
import knex from '../database/connection';

export async function create(request: Request, response: Response) {
  try {
    const { user_uuid } = request.user;
    const { task } = request.body;

    if (!user_uuid) {
      return response.json({ message: 'Uuid not found' });
    }

    if (!isUuid(user_uuid)) {
      return response.json({ message: 'Does not Uuid' });
    }

    const user = await knex('users').where({ uuid: user_uuid }).first();

    if (!user) {
      return response.json({ message: 'User does not exists' });
    }

    await knex('todos').insert({
      uuid: funcUuid(),
      task,
      user_uuid: user.uuid,
    });

    return response.json({ message: 'Success' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
export async function index(request: Request, response: Response) {
  try {
    const { user_uuid } = request.user;

    if (!user_uuid) {
      return response.json({ message: 'Uuid not found' });
    }

    if (!isUuid(user_uuid)) {
      return response.json({ message: 'Does not Uuid' });
    }

    const user = await knex('users').where({ uuid: user_uuid }).first();

    if (!user) {
      return response.json({ message: 'User does not exists' });
    }

    const todos = await knex('todos').where({ user_uuid: user_uuid });

    return response.json(todos);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
export async function destroy(request: Request, response: Response) {
  try {
    const { user_uuid } = request.user;
    const { uuid } = request.params;

    if (!user_uuid) {
      return response.json({ message: 'Uuid not found' });
    }

    if (!isUuid(user_uuid)) {
      return response.json({ message: 'Does not Uuid' });
    }

    const user = await knex('users').where({ uuid: user_uuid }).first();

    if (!user) {
      return response.json({ message: 'User does not exists' });
    }

    await knex('todos').where({ uuid }).del();

    return response.json({ message: 'Success' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
