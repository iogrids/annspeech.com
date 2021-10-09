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
  const mailOptions = {
    from: '"maria@annspeech.com" <maria@annspeech.com>',
    to: `${req.body.email}`,
    subject: `${req.body.subject}`,
    text: 'how are you',
    html: htmlToSend,
  };
  const info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', 'https://mailtrap.io/inboxes/test/messages/');
  res.status(200).json({ status: 'OK' });
}

export default sendMail;
