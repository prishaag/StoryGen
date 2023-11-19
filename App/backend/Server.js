const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});

app.post('/send-verification-code', async (req, res) => {
  const { email } = req.body;

  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Verification Code for Your App',
    text: `Your verification code is: ${verificationCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Verification code sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/create-account', (req, res) => {
  // TODO: Implement account creation logic using the provided data
  // For now, let's just simulate the process
  const { email, name, password, verificationCode } = req.body;

  if (verificationCode === '123456') {
    console.log('Account created successfully');
    res.status(200).json({ message: 'Account created successfully!' });
  } else {
    console.error('Invalid verification code');
    res.status(400).json({ error: 'Invalid verification code' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
