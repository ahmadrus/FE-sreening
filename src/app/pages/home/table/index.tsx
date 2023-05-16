import React, { memo, useState } from 'react';
import { Table, Button, Layout } from 'antd';
import { Modals } from '../modals';
import useColumn from './useColumn';

import { createItem } from '@/constant/apiURL';
import { fetcher } from '@/util/fetcher';

interface PropsTable {
  dataSource: any[];
  mutation: any;
}
const { Content } = Layout;

const TableViews = ({ dataSource = [], mutation }: PropsTable) => {
  const { columns } = useColumn();
  const [typeModals, setTypeModals] = useState<string>('');
  const [tempData, setTempData] = useState<unknown>({});
  const [visible, setVisible] = useState<boolean>(false);
  const createOrder = async (e: any) => {
    try {
      await fetcher(
        createItem,
        {
          method: 'POST',
          data: {
            ...e,
            height: Number(e.height),
            weight: Number(e.weight),
            length: Number(e.length),
            width: Number(e.width),
          },
        },
        true
      ).then((e) => e.data);
    } catch {
      alert('Failed Create Orders');
    } finally {
      setVisible(false);
      mutation.mutateAsync();
    }
  };

  const modals = {
    type: typeModals,
    visible: visible,
    onHandleCreate: (e: any) => createOrder(e),
    data: tempData,
    setVisible: (e: any) => actionVisible({ type: typeModals, visible: e }),
  };

  const actionVisible = (e: any) => {
    setVisible(e.visible);
    setTypeModals(e.type);
    e?.data && setTempData(e.data);
    if (!e.visible) {
      setTempData({});
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => actionVisible({ type: 'ADD', visible: true })}
        size="large"
        className="create-button"
      >
        Create Orders
      </Button>

      <Content className="table-contents">
        <Table
          bordered
          size="middle"
          loading={mutation.isLoading}
          columns={columns}
          dataSource={dataSource}
        />

        <Modals {...modals} />
      </Content>
    </>
  );
};

export default memo(TableViews);
