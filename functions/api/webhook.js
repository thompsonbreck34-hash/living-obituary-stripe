import { getStripeClient } from './stripe-client';

// POST /api/webhook
// Receives Stripe webhook events and verifies the signature.
// Register this URL in Stripe: Developers → Webhooks → Add endpoint
//   Production:  https://livingobituary.ai/api/webhook
//   Preview:     https://<preview>.living-obituary.pages.dev/api/webhook
export const onRequestPost = async (context => {
  const { request, env } = context;

  const sig = request.headers.get('Stripe-Signature');
  if (!sig) {
    return new Response('Missing Stripe-Signature header', { status: 400 });
  }

  const rawBody = await request.text(); // must be raw, not parsed JSON
  const stripe = getStripeClient(env);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(`Webhook signature verification failed: ${err.message}`, {
      status: 400,
    });
  }

  // ── Handle events ──────────────────────────────────────────────
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      // TODO: grant access, create user record, etc.
      console.log('Checkout completed:', session.id, session.customer_email);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      // TODO: revoke access when a subscription is cancelled
      console.log('Subscription deleted:', subscription.id);
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object;
      // TODO: notify customer of failed payment
      console.log('Payment failed:', invoice.id);
      break;
    }

    default:
      // Unhandled event type — log for now
      console.log('Unhandled event type:', event.type);
  }

  return new Response('ok', { status: 200 });
});
