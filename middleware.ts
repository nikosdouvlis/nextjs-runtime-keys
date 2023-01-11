import { withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { secrets } from "./secrets";

// Set the paths that don't require the user to be signed in
const publicPaths = ['/', '/sign-in*', '/sign-up*', '/app-dir*'];

const isPublic = (path: string) => {
    return publicPaths.find(x => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))));
};

export default withClerkMiddleware(req => {
    console.log('withClerkMiddleware')
    return NextResponse.next();
}, { jwtKey: secrets.CLERK_JWT_KEY, frontendApi: secrets.CLERK_FRONTEND_API, apiKey: secrets.CLERK_API_KEY });

export const config = { matcher: '/((?!.*\\.).*)' };
