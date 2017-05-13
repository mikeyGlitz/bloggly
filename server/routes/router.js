import { Router } from 'express';
import isomorphicHandler from './IsomorphicHandler';

const router = new Router();

router.use('*', isomorphicHandler);

export default router;
