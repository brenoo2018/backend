import { Router } from 'express';

import * as SessionsController from '../controller/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', SessionsController.create);

export default sessionsRouter;
