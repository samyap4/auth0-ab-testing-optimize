import React from 'react';

import Logo from './Logo';
import { Text, Button } from '@vercel/examples-ui'
import Cookies from 'js-cookie'

const removeCookie = () => {
  Cookies.remove(COOKIE_NAME)
  window.location.reload()
}

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Universal Login A/B Testing
    </h1>

    <p className="lead" data-testid="hero-lead">
      This is a sample application that demonstrates how to A/B test the Auth0 Universal Login by using Next.JS edge middleware and Google Optimize
    </p>
    <Text className="mb-4">
        Click the button below if you want to change the current variant (each
        variant has a 50% chance)
      </Text>
      <Button variant="secondary" onClick={removeCookie}>
        Remove cookie & reload
      </Button>
  </div>
);

export default Hero;
