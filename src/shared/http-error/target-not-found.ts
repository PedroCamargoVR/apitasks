import IHttpError from "./http-error.interface";

export class TargetNotFound extends Error implements IHttpError{
  statusCode: number;
  isHttpError: boolean;

  constructor(message: string){
    super(message);
    this.name = "TargetNotFound";
    this.statusCode = 404;
    this.isHttpError = true;
    Object.setPrototypeOf(this, TargetNotFound.prototype);
  }
};
