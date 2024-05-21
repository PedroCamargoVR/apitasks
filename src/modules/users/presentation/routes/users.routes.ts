import { Router } from "express";
import UserController from "../controllers/users.controller";
import { UserRepository } from "../../infra/repositories/user.repository";
import { Joi, Segments, celebrate } from "celebrate";
import verifiyTokenMiddleware from "../../../auth/infra/middlewares/verifiy-token.middleware";
import { userEmailParamValidation, userIdParamValidation, userInputBodyValidation } from "../../../../shared/validation/user-input-validate.validation";

const userRouter = Router();
const userRepository = new UserRepository();
const userController = new UserController(userRepository);

userRouter.get("/", verifiyTokenMiddleware, (req, res) => userController.getAllUsers(req, res));

userRouter.get(
  "/id/:id",
  celebrate(userIdParamValidation),
  verifiyTokenMiddleware,
  (req, res, next) => userController.getUserById(req, res, next)
);

userRouter.get(
  "/email/:email",
  celebrate(userEmailParamValidation),
  verifiyTokenMiddleware,
  (req, res) => userController.getUserByEmail(req, res)
);

userRouter.post(
  "/",
  celebrate(userInputBodyValidation),
  (req, res) => userController.saveUser(req, res)
);

userRouter.delete(
  "/:id",
  celebrate(userIdParamValidation),
  verifiyTokenMiddleware,
  (req, res, next) => userController.deleteUser(req, res, next)
);


export default userRouter;
