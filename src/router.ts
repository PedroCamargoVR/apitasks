import { Router } from 'express';
import userRouter from './modules/users/presentation/routes/users.routes';
import authRouter from './modules/auth/presentation/routes/auth.routes';

const mainRouter = Router();

//Authentication route definition on main router
mainRouter.use("/auth", authRouter);

//User routes definition on main router
mainRouter.use("/users",userRouter);

export default mainRouter;
