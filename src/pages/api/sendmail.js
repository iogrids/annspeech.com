import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

async function sendMail(req, res) {
  const patientType = req.body.patientType;

  let filePath;

  if (patientType === 'Child') {
    filePath = path.join('./emails/child.hbs');
  } else {
    filePath = path.join('./emails/adult.hbs');
  }

  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  const replacements = {
    firstName: `${req.body.fullname}`,
  };
  const htmlToSend = template(replacements);
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
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
      name: '"maria@annspeech.com" <maria@annspeech.com>',
      address: 'maria@annspeech.com',
    },
    replyTo: 'maria@annspeech.com',
    to: `${req.body.email}`,
    subject: `${req.body.subject}`,
    text: 'how are you',
    html: <p>sdssd</p>,
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
