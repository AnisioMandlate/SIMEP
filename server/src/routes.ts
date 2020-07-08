import { Router, request, response } from 'express'

const routes = Router();

routes.get('/', (request, response) => {
	return response.json({message: 'Hello universe'})
});

export default routes
