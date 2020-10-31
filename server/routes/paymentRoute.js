import express, { Router } from "express";
import config from "../config";
import Axios from "axios";
const paypal = require("paypal-rest-sdk");
const app = express();

import jwt from "jsonwebtoken";
const router = Router();

router.post("/buy", async (req, res) => {
  const CLIENT = config.PAYPAL_CLIENT_ID;
  const SECRET = config.PAYPAL_SECRETE;
  const PAYPAL_API = "https://api.sandbox.paypal.com";
  request.post(
    PAYPAL_API + "/v1/payments/payment",
    {
      auth: {
        user: CLIENT,
        pass: SECRET,
      },
      body: {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        transactions: [
          {
            amount: {
              total: "5.99",
              currency: "USD",
            },
          },
        ],
        redirect_urls: {
          return_url: "http://localhost:3000/payment/success",
          cancel_url: "http://localhost:3000/payment/cancel",
        },
      },
      json: true,
    },
    function (err, response) {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      // 3. Return the payment ID to the client
      res.json({
        id: response.body.id,
      });
    }
  );
});

export default router;
