import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';


export default class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const { sessionId } = req.cookies;
    if (!sessionId) {
      return next();
    }

    try {
      req['user'] = "123";
    } catch (e) {
      console.log('session fetching failed', e);
    }
    next();
  }
}