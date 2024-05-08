import { Router } from "express";
import UserController from "../controllers/users.controller";
import { UserRepository } from "../../infra/repositories/user.repository";
import { Joi, Segments, celebrate } from "celebrate";

const userRouter = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

userRouter.get("/", (req, res) => userController.getAllUsers(req, res));

userRouter.get(
  "/id/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().hex().length(24)
    }
  }),
  (req, res, next) => userController.getUserById(req, res, next)
);

userRouter.get("/email/:email", (req, res) => userController.getUserByEmail(req, res));

userRouter.post("/", (req, res) => userController.saveUser(req, res));

userRouter.delete("/:id", (req, res, next) => userController.deleteUser(req, res, next));


export default userRouter;
