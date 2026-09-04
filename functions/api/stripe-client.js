// Shared Stripe client — imported by your checkout and webhook Functions.
// Requires the `stripe` npm package: run `npm install stripe` in your project root.

export function getStripeClient(env) {
  // Dynamically import so the module loads only where it's used.
  // If your bundler supports it, you can also use a static import at the top:
  //   import Stripe from 'stripe';
  const Stripe = require('stripe');
  return new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-12-18.acacia', // pin to a stable API version
  });
}
