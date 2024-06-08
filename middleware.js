// middleware.js
import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import { JWT } from 'jose';

const secret = process.env.JWT_SECRET; // Your JWT secret

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const baseUrl = process.env.BASE_URL;
  const cookies = parse(req.headers.cookie || '');

  // Check if the route needs protection
  if (pathname.startsWith('/admin') || pathname.startsWith('/user')) {
    const token = cookies.token;

    if (!token) {
      // If no token is present, redirect to sign-in page
       return NextResponse.redirect(`${baseUrl}/login`);

    }

    try {
      // Decode and verify the token using jose library
      const { payload } = JWT.verify(token, secret);

      // Check user role
      if (pathname.startsWith('/admin') && payload.role !== 'admin') {
        return NextResponse.redirect(`${baseUrl}/`);
  
      }

      if (pathname.startsWith('/user') && payload.role !== 'user') {
        return NextResponse.redirect(`${baseUrl}/`);
  
 
      }

      // Token is valid, allow access
      return NextResponse.next();

    } catch (error) {
      console.error('Error decoding or verifying token:', error);
      // Invalid token, redirect to sign-in page
      return NextResponse.redirect(`${baseUrl}/login`);
    }
  }

  // If the route doesn't need protection, allow access
  return NextResponse.next();
}
