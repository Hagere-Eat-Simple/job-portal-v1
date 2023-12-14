const nodemailer = require('nodemailer');

// Create a transporter object using Gmail SMTP server
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure : true,
    auth: {
        user: process.env.User,
        pass: process.env.PASS
    }
});

const sendEmail=async(data)=>{

// Get the dynamic to address from the user
// const toAddress = process.env.TO_ADDRESS;

// Create a message object
const message = {
    from: `"Sera.net" <${"sera"}>`,
    to: data.email,
    subject: 'Interview Confirmation for [Position Name]',
    text: ``,
    html: `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Interview Confirmation</title>
    <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 16px;
    }
    
    h3 {
      margin-top: 0;
    }
    
    p {
      margin-bottom: 10px;
    }
    a {
        color: #000;
        text-decoration: none;
      }
    
    img {
      max-width: 100%;
    }
    </style>
    </head>
    <body>
    
    <h3>Dear ${data.name},</h3>
    
    <p>
    I hope this email finds you well.
    </p>
    
    <p>
    I am writing to confirm your interview for the <strong>${data.position}</strong> position at <strong>${data.company}</strong>. The interview will be held on <strong>${data.date}</strong> at <strong>${data.time}</strong> in our office at <strong>${data.address}</strong>.
    </p>
    
    <p>
    We are excited to learn more about your qualifications for this position and to discuss how you can contribute to our team.
    </p>
    
    <p>
    To prepare for the interview, please review the job description and bring a copy of your resume and any other relevant materials.
    </p>
    
    <p>
    We will be interviewing several candidates for this position, so please arrive on time. If you have any questions, please do not hesitate to contact me.
    </p>
    
    <p>
    We look forward to meeting you!
    </p>
    
    <h3>Sincerely,</h3>
    <br>
    
    <a href="www.google.com">Learn more about our company</a>
    </body>
    </html>
    `
};

// Send the email
transporter.sendMail(message, (error, success) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent successfully!');
    }
});
}
module.exports = sendEmail