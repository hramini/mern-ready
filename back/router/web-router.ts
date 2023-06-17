import { Request, Response, Router } from 'express';
import { join } from 'path';

export const webRouter = Router();

webRouter.get('/', (request: Request, response: Response): void => {
  response.sendFile(join(__dirname, '../../front/index.html'));
});
