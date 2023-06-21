import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req,res) {
    await mongooseConnect();
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = string.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    //Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntentSucceeded = event.data.object;

            break;

            default:
                console.log(`Unhandled event type ${event.type}`);
    }
}