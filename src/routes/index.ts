import { Router } from 'express';

import usersRouter from './users.routes';
import todosRouter from './todos.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/todos', todosRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
