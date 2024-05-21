import { Request, Response, NextFunction } from "express";
import { CelebrateError } from "celebrate";
import IHttpError from "../http-error/http-error.interface";

export const httpErrosMiddleware = (err: Error, req: Request, res: Response, next :NextFunction) => {

  if(isHttpError(err)){
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message
    });
  }

  if(err instanceof CelebrateError){
    return res.status(400).json({
      statusCode: 400,
      error: 'Validation Error!',
      message: err.details.get('body')?.details[0].message
    });
  }

  res.status(500).json({
    statusCode: 500,
    message: err.message,
    stackTrace: err.stack
  });
}

function isHttpError(object: any): object is IHttpError{
  return (
    object != null &&
    'statusCode' in object &&
    typeof object.statusCode === 'number' &&
    'isHttpError' in object &&
    object.isHttpError === true
  );
}
