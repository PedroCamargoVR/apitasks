import { Request, Response, NextFunction } from "express";
import { TargetNotFound } from "../../infra/http-error/target-not-found";
import { BadRequest } from "../http-error/bad-request";

export const httpErros = (err: Error, req: Request, res: Response, next :NextFunction) => {
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

  res.status(500).json({
    statusCode: 500,
    message: 'Internal Server Error!'
  });
}
