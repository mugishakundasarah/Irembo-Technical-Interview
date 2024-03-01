"use client"
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, DatePicker, Button, Card, message } from 'antd';
import { BusinessFormData, ILocation } from '@/types/types';
import { FileTextOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';
import { serverUrl } from '@/utils/serverUrl';

const { Option } = Select;

const BusinessForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async(data: BusinessFormData) => {
    setLoading(true)
    try {
        const response = await axios.post(`${serverUrl}/submit-form`, data);
        setLoading(false)
        console.log(response)
        message.success("business successfully registered")
      } catch (error) {
        console.log(error)
        setLoading(false)
        message.error("An error occured")
      } 
  };

  useEffect(() => {
    // If you have any values to set dynamically, you can use setValue
    // setValue("fieldName", "value");
  }, []);

  return (
    <Form layout="vertical" onFinish={onSubmit} form={form}>
      {/* Business Owner Details */}
      <Card
        className=" border border-primary outline-primary my-4"
        title={
          <span className="text-primary">
            <FileTextOutlined /> Business Owner Details
          </span>
        }
      >
        <h1 className="text-md font-bold">Business Owner Details</h1>
        <div className="grid grid-cols-2 w-[40%] gap-4 mt-4">
          <Form.Item<BusinessFormData>
            label="Applicant Citizenship"
            name="applicantCitizenship"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select placeholder="Select citizenship">
              <Option value="Rwandan">Rwandan</Option>
              <Option value="Foreigner">Foreigner</Option>
            </Select>
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Identification Document Number"
            name="idDocumentNumber"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter Identification document number" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Other Names"
            name="otherNames"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter other names" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Surname"
            name="surname"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter surname" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Nationality"
            name="nationality"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter nationality" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Phone number"
            name="phoneNumber"
          >
            <Input type="tel" placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="E-mail address"
            name="emailAddress"
            rules={[
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
        </div>

        <h2 className="text-sm font-bold mt-4">Business Owner Address</h2>
        <div className="grid grid-cols-2 w-[40%] gap-4 mt-4">
          <Form.Item<BusinessFormData>
            label="District"
            name="ownerAddressDistrict"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter district" />
          </Form.Item>
        </div>
      </Card>

      {/* Business Details */}
      <Card
        className=" border border-primary outline-primary my-4"
        title={
          <span className="text-primary">
            <FileTextOutlined /> Business Details
          </span>
        }
      >
        <h2 className="text-sm font-bold mb-4">Business Details</h2>
        <div className="grid grid-cols-2 w-[40%] gap-4 mt-4">
          <Form.Item<BusinessFormData>
            label="Business Type"
            name="businessType"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select placeholder="Enter Business Type">
              <Option value="Retailer">Retailer</Option>
              <Option value="Wholesale">Wholesale</Option>
              <Option value="Manufacturer">Manufacturer</Option>
            </Select>
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Company Name"
            name="companyName"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="TIN Number"
            name="tinNumber"
            rules={[
              { required: true, message: "This field is required" },
              {
                pattern: /^[0-9]{9}$/,
                message: "Please provide a valid 9-digit TIN number",
              },
            ]}
          >
            <Input placeholder="Enter TIN number" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Registration Date"
            name="registrationDate"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <DatePicker placeholder="Select date" className="w-full" format={'YYYY/MM/DD'}/>
          </Form.Item>
        </div>
        <h2 className="text-sm font-bold mt-4">Business Address</h2>
        <div className="grid grid-cols-2 w-[40%] gap-4 mt-4">
          <Form.Item<BusinessFormData>
            label="District"
            name="businessAddressDistrict"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter district" />
          </Form.Item>
        </div>
      </Card>

      {/* Product Information */}
      <Card
        className=" border border-primary outline-primary my-4"
        title={
          <span className="text-primary">
            <FileTextOutlined /> Product Information
          </span>
        }
      >
        <h2 className="text-sm font-bold mb-4">Product Information</h2>
        <div className="grid grid-cols-2 w-[40%] gap-4 mt-4">
          <Form.Item<BusinessFormData>
            label="Purpose of Importation"
            name="purposeOfImportation"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select placeholder="Select purpose of importation">
              <Option value="DirectSale">Direct Sale</Option>
              <Option value="PersonalUse">Personal Use</Option>
              <Option value="TrialUse">Trial Use</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Specify Purpose of Importation"
            name="specifyPurpose"
            rules={[
              {
                required: true,
                message: 'This field is required when "Other" is selected',
              },
            ]}
          >
            <Input placeholder="Specify purpose of importation" />
          </Form.Item>
        </div>
        <h2 className="text-sm font-bold mt-4">Product Details</h2>
        <div className="grid grid-cols-2 w-[40%] gap-4 mt-4">
          <Form.Item<BusinessFormData>
            label="Product Category"
            name="productCategory"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select placeholder="Select product category">
              <Option value="GeneralPurpose">General Purpose</Option>
              <Option value="ConstructionMaterials">
                Construction Materials
              </Option>
              <Option value="Chemicals">Chemicals</Option>
            </Select>
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Weight (kg)"
            name="productWeight"
            rules={[
              { required: false },
            ]}
          >
            <Input type="number" placeholder="Enter weight in kg" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Description of Products"
            name="productDescription"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input.TextArea placeholder="Enter description of products" />
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Unit of Measurement"
            name="productUnit"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select placeholder="Enter unit of measurement">
              <Option value="Kgs">Kgs</Option>
              <Option value="Tonnes">Tonnes</Option>
            </Select>
          </Form.Item>

          <Form.Item<BusinessFormData>
            label="Quantity of Product(s)"
            name="productQuantity"
            rules={[
              { required: true, message: "This field is required" },
              {
                validator: async (_, value) => {
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Number should be greater than 0");
                },
              },
            ]}
          >
            <Input type="number" placeholder="Enter quantity" />
          </Form.Item>
        </div>
      </Card>

      {/* Submit Button */}
      <div className="mt-4 flex justify-center items-center">
        <Form.Item>
          <Button loading={loading} className="bg-primary text-white" htmlType="submit">
            Apply for service
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default BusinessForm;
