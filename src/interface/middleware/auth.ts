import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { User } from '../../infrastructure/models/UserModel'; // Adjust the import path as necessary

interface CustomRequest extends Request {
  user?: User;
}

export async function authenticateToken(req:Request, res:Response, next:NextFunction){
  const headerToken = req.headers.authorization;

  if(!headerToken){
    return res.sendStatus(401);
  }

  const token = headerToken.split(" ")[1];

  if(!token){
    return res.sendStatus(401);
  }

  const customReq = req as CustomRequest;

  await jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if(err){
      return res.sendStatus(403);
    }

    customReq.user = decoded as User; // Cast decoded to User type
    return next();
  });

  return next();
}