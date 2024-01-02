import { Request, Response, Router } from 'express';
import { join } from 'path';

export const innerRouter = Router();

innerRouter.get('/', (request: Request, response: Response): void => {
  response.sendFile(join(__dirname, '../../front/index.html'));
});

innerRouter.get('/hello', (request: Request, response: Response): void => {
  response.sendFile(join(__dirname, '../../front/hello.html'));
});

export const insideRouter = Router();

insideRouter.use('/', innerRouter);

export const webRouter = Router();

webRouter.use('/books', insideRouter);
