import { Request, Response } from 'express';

import { uuid } from 'uuidv4';
import { hash } from 'bcryptjs';
import knex from '../database/connection';

export async function create(request: Request, response: Response) {
  try {
    const { task } = request.body;
    // console.log(task);
    return response.json({ message: 'Success' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
export async function index(request: Request, response: Response) {
  try {
    return response.json({ message: 'Success' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
export async function destroy(request: Request, response: Response) {
  try {
    return response.json({ message: 'Success' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
