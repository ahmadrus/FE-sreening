import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'antd';
import { Forms } from './form';

interface IModalComponent {
  type?: string | any;
  data?: object | any;
  visible: boolean;
  setVisible: (e: boolean) => void;
  onHandleCreate: (e: any) => void;
}

export const Modals = ({
  data,
  visible,
  setVisible,
  onHandleCreate,
}: IModalComponent) => {
  const [form] = Form.useForm();

  const configForm = {
    data,
    onClose: () => setVisible(false),
    onSubmit: (e: object) => onHandleCreate(e),
  };
  useEffect(() => {
    visible && form.resetFields();
    visible &&
      data?.role_name &&
      form.setFieldsValue({
        name: data.role_name,
        is_active: Number(data?.is_active),
        type: data?.type || '',
      });
  }, [visible, form, data]);

  return (
    <Modal
      title={'Create Orders'}
      open={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Forms form={form} {...configForm} />
    </Modal>
  );
};
