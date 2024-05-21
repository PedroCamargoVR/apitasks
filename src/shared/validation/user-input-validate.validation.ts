import { Joi, Segments } from "celebrate";
import customMessages from "./custom-messages";

const userInputBodyValidation = {
  [Segments.BODY]: {
    name: Joi.string().required().messages(customMessages('name')),
    email: Joi.string().email().required().messages(customMessages('email')),
    password: Joi.string().required().messages(customMessages('password')),
    role: Joi.number().integer().required().min(1).max(4).messages(customMessages('role'))
  }
};

const userIdParamValidation = {
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24)
  }
};

const userEmailParamValidation = {
  [Segments.PARAMS]: {
    email: Joi.string().email()
  }
};

export { userInputBodyValidation, userIdParamValidation, userEmailParamValidation};
