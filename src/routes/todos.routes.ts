import { Router } from 'express';

const todosRouter = Router();

todosRouter.get('/list', async (request, response) => {
  try {
    return response.send('fooooiii todos');
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default todosRouter;
