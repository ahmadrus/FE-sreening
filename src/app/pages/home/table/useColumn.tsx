import React, { useState } from 'react';

interface IPropsHandleAction {
  type: string;
  data: object;
  visible: boolean;
}

const useColumn = () => {
  const [columns] = useState<object[]>([
    {
      title: 'Tracking Number',
      dataIndex: 'TrackingNumber',
      key: 'TrackingNumber',
    },
    {
      title: 'Consignee',
      children: [
        {
          title: 'Name',
          dataIndex: 'ConsigneeName',
          key: 'ConsigneeName',
        },
        {
          title: 'Number',
          dataIndex: 'ConsigneeNumber',
          key: 'ConsigneeNumber',
        },
        {
          title: 'City',
          dataIndex: 'ConsigneeCity',
          key: 'ConsigneeCity',
        },
        {
          title: 'Postal Code',
          dataIndex: 'ConsigneePostalCode',
          key: 'ConsigneePostalCode',
        },
        {
          title: 'Payment Type',
          dataIndex: 'PaymentType',
          key: 'PaymentType',
          render: (PaymentType: any) => (
            <span> {PaymentType.toUpperCase()}</span>
          ),
        },
      ],
    },
    {
      title: 'Weight',
      dataIndex: 'Weight',
      width: '120px',
      key: 'type',
    },
    {
      title: 'Length',
      width: '120px',
      dataIndex: 'Length',
      key: 'Length',
    },
  ]);

  return { columns };
};

export default useColumn;
