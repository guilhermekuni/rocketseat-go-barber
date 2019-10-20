import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// USERS
routes.get('/users',  UserController.index);
routes.post('/users', UserController.store);

// SESSIONS
routes.post('/sessions', SessionController.store);

export default routes;
