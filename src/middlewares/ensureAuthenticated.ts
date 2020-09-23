import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // validaçao token jwt

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({ message: 'JWT token is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      user_uuid: sub,
    };

    return next();
  } catch (error) {
    return response.json({ message: 'Invalid JWT token' });
  }
}
