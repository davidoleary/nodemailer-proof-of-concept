const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  auth: {
    user: 'gdpr.coordinator@somecompany.com',
    pass: 'somepassword',
  },
});

const sendEmail = (html, subject) => {
  const mailOptions = {
    from: 'gdpr.coordinator@somecompany.com',
    to: 'david.oleary@somecompany.com',
    subject,
    html: 'test',
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(`Error sending email ${err}`);
      return;
    }
    console.log('Email sent');
  });
};

sendEmail('htmlResponse', 'GDPR coordinator - IGNORE THIS IS A TEST Error notification');
