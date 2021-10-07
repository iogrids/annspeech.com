const nodemailer = require('nodemailer');

async function sendEmail(req, res) {
  //const { firstName, lastName, email, message } = JSON.parse(req.body);

  const firstName = 'jeril';
  const lastName = 'jose';
  const email = 'dsdsdds';
  const message = 'sdsssd';

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.mailgun.org',
    auth: {
      user: 'postmaster@sandbox1b965b730cb9406a961ec57415c301d4.mailgun.org',
      pass: 'ef26107c6f1af90753a6b54ad7d36c33-aff8aa95-30fe5f32',
    },
    secure: true,
    tls: {
      ciphers: 'SSLv3',
    },
  });

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
      name: `${firstName} ${lastName}`,
      address: 'jerilcj3@gmail.com',
    },
    replyTo: email,
    to: 'jerilcj3@gmail.com',
    subject: `form message`,
    text: message,
    html: `${message}`,
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

export default sendEmail;
