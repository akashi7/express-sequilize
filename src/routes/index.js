import { Router } from "express";
import authRoutes from './auth';
import postsRoutes from './posts';


const routes = Router();

routes.use('/api/auth', authRoutes);
routes.use('/api/posts', postsRoutes);


export default routes;