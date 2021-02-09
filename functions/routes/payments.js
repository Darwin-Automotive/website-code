require("dotenv").config();
const Razorpay = require("razorpay");
const express = require("express");
const crypto = require("crypto");

const router = express.Router();
router.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: 100,
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/success", async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    const shasum = crypto.createHmac("sha256", "oiwNbUQfQcfTp07miBF9N4bn");
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");
    if (digest !== razorpaySignature) {
      return res.status(400).json({ msg: "Transaction is not legit" });
    }
    res.json({
      msg: "success",
      orderId: orderCreationId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
