import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const endpointSecret = "whsec_23783ee8ff0a44db03c07b8ebf06113ed6771b93740874751f28b767f9ce55c9";


export default async function handler(req,res) {
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
        const data = event.data.object;
        const orderId = data.metadata.orderId;
        const paid = data.payment_status === 'paid';
        if (orderId && paid) {
            await Order.findByIdAndUpdate(orderId,{
                paid:true,
            })


            res.status(200).send('ok');
        }
        
        break;
        default:
  console.log(`Unhandled event type ${event.type}`);
    }
}

export const config = {
    api: {bodyParser:false,}
};

//virtue-noble-right-peace
//acct_1NJMasEQAlTI8Tx5