import { Router } from 'express';

import usersRouter from './users.routes';
import todosRouter from './todos.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/todos', todosRouter);

export default routes;
