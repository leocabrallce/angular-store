const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  console.log('get /');
  res.send('Email API service is up and running');
});

app.get('/products', async (req, res) => {
  console.log('get /products');
  const acceptedLanguage = (req.headers['accept-language'] || 'en-US').split('-')[0].toLowerCase();
  let products = [];
  try {
    products = (await import(`./assets/products.${acceptedLanguage}.json`, { assert: { type: 'json' } }));
  } catch (error) {
    products = (await import(`./assets/products.en.json`, { assert: { type: 'json' } }));
  }
  res.json(products?.default || products);
});

app.post('/orders', (req, res) => {
  console.log('post /orders');
  const { subject, email } = req.body;
  transport.sendMail({
    subject,
    html: email,
    from: 'sender@address',
    to: 'recipient@address',
  }).then((info) => {
    console.log('Email sent', info);
    return res.send('Email sent successfully');
  }).catch((error) => {
    console.error(error);
    return res.send(error);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Orders server is running on port ${port}`);
});

/**
 * You can test the implementation above by running the following command in your terminal
 * $ curl -d '{"subject": "email title", "email":"email content"}' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
 */
