import { getStripeClient } from './stripe-client';

// POST /api/create-checkout-session
// Body: { priceId: 'price_xxx', mode?: 'payment' | 'subscription' }
export const onRequestPost = async (context => {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { priceId, mode = 'subscription' } = body;

  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Missing priceId' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stripe = getStripeClient(env);
  const origin = request.headers.get('origin') || 'https://livingobituary.ai';

  try {
    const session = await stripe.checkout.sessions.create({
      mode,                         // 'payment' for one-time, 'subscription' for recurring
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      automatic_tax: { enabled: true },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
