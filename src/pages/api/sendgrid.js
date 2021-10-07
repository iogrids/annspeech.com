import sendgrid from '@sendgrid/mail';

var SENDGRID_APY_KEY(process.env.SENDGRID_API_KEY);

sendgrid.setApiKey(SENDGRID_APY_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'jerilcj3@gmail.com', // Your email where you'll receive emails
      from: 'maria@annspeech.com', // your website email address here
      subject: `Email three`,
      html: `<div>You've got a mail, three</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
