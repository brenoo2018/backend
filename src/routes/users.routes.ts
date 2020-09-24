import { Router } from 'express';

import * as UsersController from '../controller/UsersController';
const usersRouter = Router();

usersRouter.post('/create', UsersController.create);

export default usersRouter;
