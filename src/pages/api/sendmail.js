const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

async function sendMail(req, res) {
  const fromName = 'Maria';
  const fromAddress = 'maria@annspeech.com';

  const patientType = req.body.patientType;

  let htmlTemplate;

  if (patientType === 'Child') {
    htmlTemplate = 'child';
  } else {
    htmlTemplate = 'adult';
  }

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.sendgrid.net',
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  transporter.use(
    'compile',
    hbs({
      viewEngine: 'express-handlebars',
      viewPath: '../../../views/',
    })
  );

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: {
      name: `${fromName}`,
      address: `${fromAddress}`,
    },
    replyTo: `${fromAddress}`,
    to: `${req.body.email}`,
    subject: `${req.body.subject}`,
    text: `${req.body.subject}`,
    html: `${htmlTemplate}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: 'OK' });
}

export default sendMail;
