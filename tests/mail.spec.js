import { test, expect } from "@playwright/test";
const nodemailer = require('nodemailer');
// import SPcredentials from "../credentials/SPcredentials";
// import axfoodCredentials from "../credentials/axfoodCredentials";
// import { Console } from "console";
// const XLSX = require("xlsx");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trucstesting@gmail.com',  // Replace with your email
    pass: 'Trucs@12345'  // Use App Password if using Gmail
  }
});

const mailOptions = {
  from: 'trucstesting@gmail.com',
  to: 'rasikashanmugham@gmail.com',  // Replace with recipient email
  subject: 'Test Email from Node.js',
  text: 'This is a test email from my Playwright script.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Error sending email:', error);
  } else {
    console.log('📧 Email sent successfully:', info.response);
  }
});

// Example failing test (Replace this with your actual test cases)
test('Sample failing test', async ({ page }) => {
    await page.goto('https://example.com');
    await page.click('non-existent-selector'); // This will cause a failure
  });
  