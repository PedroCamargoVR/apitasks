import IHttpError from "./http-error.interface";

export class Forbidden extends Error implements IHttpError{
  statusCode: number;
  isHttpError: boolean;

  constructor(message: string){
    super(message);
    this.name = "Forbidden";
    this.statusCode = 403;
    this.isHttpError = true;
    Object.setPrototypeOf(this, Forbidden.prototype);
  }
};
