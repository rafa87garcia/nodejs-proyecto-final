const express = require("express"); // required express for using the npm hta.
const nodemailer = require("nodemailer");
const router = express.Router();// required jsonwebtoken for using the function of espress hta.
const { check, validationResult } = require('express-validator');// required express-validator for using the npm hta.
const { EMAIL } = require("../config");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  post: 587,
  secure: false,
  auth: {
    user: "osvaldo.kunze34@ethereal.email",
    pass: "GepYKUYRRtFrg33Q8H"
  }
});

// to create product
router.post("/contact", (req, res, next) => {
    
  const sender = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;


  const mailOptions = {
    form: sender,
    to: EMAIL,
    subject: `Formulario de contacto de ${sender}`,
    html: `
    <h2>Formulario de contacto</h2>
    <p>
      <strong>Correo electronico:</strong>
      <span>${remitent}</span>
    </p>
    <p>
    <strong>Asunto:</strong>
    <span>${subject}</span>
    </p>
    <p>
    <strong>Mensaje</strong>
    <span>${message}</span>
    </p>
    `,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.message)
    }
    console.log("Email enviado");
    res.status(200).json("Send email");
  })
});

module.exports = router;