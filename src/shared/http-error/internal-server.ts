import IHttpError from "./http-error.interface";

export class InternalServer extends Error implements IHttpError{
  statusCode: number;
  isHttpError: boolean;

  constructor(message: string){
    super(message);
    this.name = "InternalServer";
    this.statusCode = 500;
    this.isHttpError = true;
    Object.setPrototypeOf(this, InternalServer.prototype);
  }
};
