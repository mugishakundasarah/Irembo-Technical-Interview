export interface ILocation {
  id: string;
  name: string;
}

export type BusinessFormData = {
  applicantCitizenship: string;
  idDocumentNumber: string;
  otherNames: string;
  surname: string;
  nationality: string;
  phoneNumber?: string;
  emailAddress: string;
  ownerAddressDistrict: string;
  businessType: string;
  companyName: string;
  tinNumber: string;
  registrationDate: string; // You might want to use a specific date type here
  businessAddressDistrict: string;
  purposeOfImportation: string;
  specifyPurpose: string;
  productCategory: string;
  productName: string;
  productWeight?: number;
  productDescription: string;
  productUnit: string;
  productQuantity: number;
};
