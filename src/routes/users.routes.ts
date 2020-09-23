import { Router } from 'express';

const usersRouter = Router();

import * as UsersController from '../controller/UsersController';

usersRouter.post('/', UsersController.create);

export default usersRouter;
