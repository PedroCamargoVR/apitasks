import IHttpError from "./http-error.interface";

export class Unauthorized extends Error implements IHttpError{
  statusCode: number;
  isHttpError: boolean;

  constructor(message: string){
    super(message);
    this.name = "Unauthorized";
    this.statusCode = 401;
    this.isHttpError = true;
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
};
