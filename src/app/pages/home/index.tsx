import { cx } from 'emotion';
import React, { useState, useEffect } from 'react';
import TableView from './table';
import wrapper from './_homeStyle';
import { listingItem } from '@/constant/apiURL';
import { fetcher } from '@/util/fetcher';
import { useMutation } from 'react-query';

function Home() {
  const [dataSource, setDataSource] = useState([]);
  const fetchOrders = (): Promise<object> => {
    return fetcher(listingItem, { method: 'GET' }, true).then((e) => e.data);
  };

  const mutation = useMutation({
    mutationFn: () => fetchOrders(),
    onSuccess: (data: any) => {
      // success response
      const fixedData = data.map((e: any, i: number) => {
        return { ...e, key: i };
      });
      setDataSource(fixedData);
    },
  });

  useEffect(() => {
    mutation.mutateAsync();
  }, []);
  return (
    <section className="showcase">
      <div className={cx('bg-container', wrapper)}>
        <TableView {...{ dataSource, mutation }} />
      </div>
    </section>
  );
}

export default Home;
