import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";

import { ButtonCircle } from '../../components/ButtonCircle';
import { Tables } from '../../components/Table';


export default function Home() {

  const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Preço', dataIndex: 'price', key: 'price' },
    { title: 'Duração', dataIndex: 'duration', key: 'duration' },
    {
      title: 'Adicionar',
      key: 'action',
      render: () => (
        <ButtonCircle shape="circle" icon={<MdAddShoppingCart />} size={'large'} />
      ),
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      price: 32,
      duration: 'New York No. 1 Lake Park',
      status: 'Adiconado',
    },
    {
      key: '2',
      name: 'Jim Green',
      price: 42,
      duration: 'London No. 1 Lake Park',
      status: 'Em espera',
    },
    {
      key: '3',
      name: 'Joe Black',
      price: 32,
      duration: 'Sidney No. 1 Lake Park',
      status: 'Adiconado',
    },
  ];

  return (
    <Link to="/service">
      <Tables
        columns={columns}
        dataSource={data}
      />
    </Link>
  );
};
