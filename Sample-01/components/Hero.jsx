import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Universal Login A/B Testing
    </h1>

    <p className="lead" data-testid="hero-lead">
      This is a sample application that demonstrates how to A/B test the Auth0 Universal Login by using Next.JS edge middleware and Google Optimize
    </p>
  </div>
);

export default Hero;
