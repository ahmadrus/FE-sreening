import React from 'react';
import { Button, Form, Input, Row, Col, FormInstance, Select } from 'antd';

interface IFormProps {
  onSubmit: (e: object) => void;
  onClose: () => void;
  form?: FormInstance;
}

export const Forms = ({ onSubmit, onClose, form }: IFormProps): JSX.Element => {
  const layoutFrom = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  return (
    <Form
      {...layoutFrom}
      form={form}
      name="modal"
      layout="horizontal"
      labelAlign="left"
      onFinish={onSubmit}
    >
      <Form.Item noStyle>
        <Form.Item
          label="Name"
          name="consigneeName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="consigneeAddress"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="consigneeCity"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Country"
          name="consigneeCountry"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="paymentType"
          rules={[{ required: true }]}
          label="Payment"
        >
          <Select
            defaultValue="cod"
            style={{ width: 120 }}
            options={[
              { value: 'cod', label: 'COD' },
              { value: 'transfer', label: 'Transfer' },
              { value: 'cc', label: 'Creadit Card' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="PostalCode"
          name="consigneePostalCode"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Province"
          name="consigneeProvince"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Number"
          name="consigneeNumber"
          rules={[
            { required: true },
            { pattern: /^[0-9]*$/, message: 'only accept number' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Height"
          name="height"
          rules={[
            { required: true },
            { pattern: /^[0-9, .]*$/, message: 'only accept number' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Width"
          name="width"
          rules={[
            { required: true },
            { pattern: /^[0-9, .]*$/, message: 'only accept number' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Weight"
          name="weight"
          rules={[
            { required: true },
            { pattern: /^[0-9, .]*$/, message: 'only accept number' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Length"
          name="length"
          rules={[
            { required: true },
            { pattern: /^[0-9, .]*$/, message: 'only accept number' },
          ]}
        >
          <Input />
        </Form.Item>

        <Row justify="end" gutter={16}>
          <Col>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Col>
          <Col>
            <Button onClick={onClose}>Cancel</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};
