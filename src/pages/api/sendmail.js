const nodemailer = require('nodemailer');
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

async function sendMail(req, res) {
  const htmlToSend2 = `<!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Simple Transactional Email</title>
      <style>
      /* -------------------------------------
          INLINED WITH htmlemail.io/inline
      ------------------------------------- */
      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
              table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
  
      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }
      </style>
    </head>
    <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi {{firstName}},</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">I understand that you are having concerns regarding your child’s speech and language skills and I am here to help you.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 15px;">I am providing below the services that I offer.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 15px;">Detailed assessment (45 minutes- 1 hour)</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32;Collects case history</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32;Assesses the child's current skills and issues</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32;Screens for Autism, ADHD and other developmental disorders</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32;Finds the current level of child's understanding of language (receptive language skills)</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32;Finds the current level of child's expression of language (expressive language skills)</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32;Screens for oral sensory and motor issues affecting feeding and speech clarity</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">&#8226;&#32; Detailed evaluation of stammering/stuttering, speech clarity, reading and writing issues when required</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Following this, findings from the assessment and the nature of intervention approach best suitable for your child will be discussed with you. This will help you to know the nature of therapy/intervention required for your child and what you can do at home to bring about positive changes in your child. Also the approximate number of sessions per week that would be necessary for your child to progress will be discussed.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 15px;">Therapy sessions (45 minutes each)</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Therapy sessions will be conducted through Zoom or Google meet.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Since the sessions are carried out online, active involvement of parents is required. This will also help you to effectively carry out activities at home that will bring about positive changes in your child. The sessions would also focus on training you to be your child's best therapist. I will teach you the same strategies that has worked tremendously for the kids I have worked with.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 15px;">My qualification and experience are given below:</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">I am a certified and licensed Speech and Language Pathologist with Master’s degree in Audiology and Speech Language Pathology. In my professional career I have provided assessment and treatment for numerous children with speech and language delay, communication and feeding issues associated with Autism, Attention Deficit Hyperactivity Disorders, Down's Syndrome, stuttering/stammering, Cleft Lip and Palate, other developmental disorders and so on. I am a certified Oral Placement Therapist (Level 2). Other certifications include Feeding Therapy: A Sensory Motor Approach and A Sensory Motor Approach to Apraxia of speech. I am registered with Rehabilitation Council of India.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; Margin-bottom: 15px;">Please respond to this mail if you would like go ahead and I will get back to you with the charges for assessment and therapy.</p>
  
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Regards,</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Ann James</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Speech and Language Pathologist</p>                       
                        
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                      <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
                      <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>.
                    </td>
                  </tr>
                  <tr>
                    <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                      Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">HTMLemail</a>.
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
  
            <!-- END CENTERED WHITE CONTAINER -->
            </div>
          </td>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>
  `;

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
      name: '"maria@annspeech.com <maria@annspeech.com>',
      address: 'maria@annspeech.com',
    },
    replyTo: 'maria@annspeech.com',
    to: `${req.body.email}`,
    subject: `${req.body.subject}`,
    text: 'how are you',
    html: `${htmlToSend2}`,
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
