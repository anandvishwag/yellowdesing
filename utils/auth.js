// utils/auth.js
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_ACCESS_TOKEN_SECRET;

export function generateToken(user) {
  return jwt.sign(user, secret, { expiresIn: '1h' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
