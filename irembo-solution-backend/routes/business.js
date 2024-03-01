const express = require('express');
const Business = require('../models/Business');
const router = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
    auth: {
      user: process?.env?.email,
      pass: process?.env?.password,
    },
  });
router.post('/submit-form', async (req, res) => {
    try {      
      // Store form data in MongoDB
      const formData = req.body;
      const business = new Business(formData);
      await business.save();
  
      // Send email to the user
      const mailOptions = {
        from: 'kundamugishasarah@gmail.com',
        to: formData.emailAddress,
        subject: 'Business Form Submission Confirmation',
        html: `
          <p>Thank you for submitting the business form. Your data has been received successfully.</p>
      
          <h3>Business Owner Details:</h3>
          <ul>
            <li><strong>Applicant Citizenship:</strong> ${formData.applicantCitizenship}</li>
            <li><strong>Identification Document Number:</strong> ${formData.idDocumentNumber}</li>
            <li><strong>Other Names:</strong> ${formData.otherNames}</li>
            <li><strong>Surname:</strong> ${formData.surname}</li>
            <li><strong>Nationality:</strong> ${formData.nationality}</li>
            <li><strong>Phone Number:</strong> ${formData.phoneNumber}</li>
            <li><strong>Email Address:</strong> ${formData.emailAddress}</li>
          </ul>
      
          <h3>Business Owner Address:</h3>
          <p><strong>District:</strong> ${formData.ownerAddressDistrict}</p>
      
          <h3>Business Details:</h3>
          <ul>
            <li><strong>Business Type:</strong> ${formData.businessType}</li>
            <li><strong>Company Name:</strong> ${formData.companyName}</li>
            <li><strong>TIN Number:</strong> ${formData.tinNumber}</li>
            <li><strong>Registration Date:</strong> ${formData.registrationDate.split("T")[0]}</li>
            <li><strong>Business Address District:</strong> ${formData.businessAddressDistrict}</li>
          </ul>
      
          <h3>Product Information:</h3>
          <ul>
            <li><strong>Purpose of Importation:</strong> ${formData.purposeOfImportation}</li>
            <li><strong>Specify Purpose of Importation:</strong> ${formData.specifyPurpose}</li>
            <li><strong>Product Category:</strong> ${formData.productCategory}</li>
            <li><strong>Product Name:</strong> ${formData.productName}</li>
            <li><strong>Weight (kg):</strong> ${formData.productWeight}</li>
            <li><strong>Description of Products:</strong> ${formData.productDescription}</li>
            <li><strong>Unit of Measurement:</strong> ${formData.productUnit}</li>
            <li><strong>Quantity of Product(s):</strong> ${formData.productQuantity}</li>
          </ul>
        `,
      };
      
  
      await transporter.sendMail(mailOptions);
  
      return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router