// models/Business.js

const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  applicantCitizenship: String,
  idDocumentNumber: String,
  otherNames: String,
  surname: String,
  nationality: String,
  phoneNumber: String,
  emailAddress: String,
  ownerAddressDistrict: String,
  businessType: String,
  companyName: String,
  tinNumber: String,
  registrationDate: Date,
  businessAddressDistrict: String,
  purposeOfImportation: String,
  specifyPurpose: String,
  productCategory: String,
  productName: String,
  productWeight: Number,
  productDescription: String,
  productUnit: String,
  productQuantity: Number,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
