const functions = require('firebase-functions');
const express = require ("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HZIVHEmJRu5N8tcay2U1eRnk4L2BOeYM7jl9XZjA5axOZq4JsDqOReKYqXbIfw7kISTVk0sm1gW5Ky2ry60rFxi00tY44v126')


//API

// - App config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post ('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log ('Payment Request Received BOOM!!! for this amount >>>', Math.round(total));

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total), // sub unit of the currency
        currency: "usd",
    });

    //OK Created

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/design-f8cd9/us-central1/api