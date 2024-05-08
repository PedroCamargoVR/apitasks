import { Router } from 'express';
import userRouter from './modules/users/presentation/routes/users.routes';

const mainRouter = Router();

//User routes definition on main router
mainRouter.use("/users",userRouter);

export default mainRouter;
