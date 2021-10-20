const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');


app.use(cors({ origin: "*" }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use(require('./routes/rutas'));

app.listen('3000', () => {
    console.log('escuchando');
})

/*const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

//const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    //console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    //secure: false, // true for 465, false for other ports
    auth: {
        user : 'pwebaloag@gmail.com',
        pass : 'carlOs12345'
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<example.gimail.com>', // sender address
    to: user.email, // list of receivers
    subject:  user.asunto + " 👻", // Subject line
    text : user.mensaje
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
*/