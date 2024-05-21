import { Request, Response, NextFunction } from "express";
import { TargetNotFound } from "../http-error/target-not-found";
import { BadRequest } from "../http-error/bad-request";
import { Unauthorized } from "../http-error/unauthorized";
import { Forbidden } from "../http-error/forbidden";
import { InternalServer } from "../http-error/internal-server";
import { CelebrateError } from "celebrate";

export const httpErrosMiddleware = (err: Error, req: Request, res: Response, next :NextFunction) => {
  if(err instanceof TargetNotFound){
    return res.status(404).json({
      statusCode: 404,
      message: err.message
    });
  }

  if(err instanceof BadRequest){
    return res.status(400).json({
      statusCode: 400,
      message: err.message
    });
  }

  if(err instanceof Unauthorized){
    return res.status(401).json({
      statusCode: 401,
      message: err.message
    });
  }

  if(err instanceof Forbidden){
    return res.status(403).json({
      statusCode: 403,
      message: err.message
    });
  }

  if(err instanceof InternalServer){
    return res.status(500).json({
      statusCode: 500,
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
