import { handleLogin } from '@auth0/nextjs-auth0';

export default async function login(req, res) {
  try {
    await handleLogin(req, res, {
        authorizationParams: {
            'ext-alt-brand' : 'portal_1'
        }
      });
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}
