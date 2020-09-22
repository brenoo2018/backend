import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/list', async (request, response) => {
  try {
    return response.send('foi users');
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
