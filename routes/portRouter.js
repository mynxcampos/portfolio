const portRouter = require("express").Router();
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fonsat.nodemailer@gmail.com",
    pass: "dlclhbrybfcawlgi",
  },
});


portRouter.get("/", async (req, res) => {
  try {
    res.render("main.twig");
  } catch (error) {
    res.send(error);
  }
});


portRouter.post("/sendMail", async (req, res) => {
    try {
         await transporter.sendMail({
        from: req.body.email, // sender address
        to: "melanies.campos@hotmail.com", // list of receivers
        subject: "contact pro", // Subject line
        html: `<p>de ${req.body.email}</p>
        <p>tel: ${req.body.tel}</p>
        <p>message ${req.body.message}</p>`, // plain text body
      });
      res.redirect("/");
    } catch (err) {
      res.send(err);
    }
  });

module.exports = portRouter;
