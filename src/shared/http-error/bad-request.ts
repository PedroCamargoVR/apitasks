import IHttpError from "./http-error.interface";

export class BadRequest extends Error implements IHttpError{
  statusCode: number;
  isHttpError: boolean;

  constructor(message: string){
    super(message);
    this.name = "BadRequest";
    this.statusCode = 400;
    this.isHttpError = true;
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
};
