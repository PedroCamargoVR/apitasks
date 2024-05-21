import { Joi, Segments } from "celebrate";
import customMessages from "./custom-messages";

const authInputValidation = {
  [Segments.BODY]: {
    email: Joi.string().email().required().messages(customMessages('email')),
    password: Joi.string().required().messages(customMessages('password')),
  }
}

export { authInputValidation };
