import { Router } from 'express';

import * as TodosController from '../controller/TodosController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const todosRouter = Router();

todosRouter.use(ensureAuthenticated);

todosRouter.post('/create', TodosController.create);
todosRouter.get('/', TodosController.index);
todosRouter.delete('/delete', TodosController.destroy);

export default todosRouter;
