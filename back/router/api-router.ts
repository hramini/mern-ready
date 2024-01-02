import { Request, Response, Router } from 'express';
import { versionMiddleware } from '../version';

export const innerRouterV2 = Router();

innerRouterV2.get('/', (request: Request, response: Response): void => {
  response.json({ result: 'books from v2' });
});

innerRouterV2.get('/hello', (request: Request, response: Response): void => {
  response.json({ result: 'books hello from v2' });
});

export const innerRouterV1 = Router();

innerRouterV1.get('/', (request: Request, response: Response): void => {
  response.json({ result: 'books from v1' });
});

innerRouterV1.get('/hello', (request: Request, response: Response): void => {
  response.json({ result: 'books hello from v1' });
});

export const insideRouter = Router();

insideRouter.use('/', versionMiddleware('2.0.0'), innerRouterV2);
insideRouter.use('/', innerRouterV1);

export const apiRouter = Router();

apiRouter.use('/books', insideRouter);
