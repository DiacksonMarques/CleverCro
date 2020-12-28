import React from 'react';
import { MdDelete } from 'react-icons/md';

import { Badge, Tooltip } from 'antd';
import { AvatarMod, ButtonAtd, Total } from './style'
import { ButtonCircle } from '../../components/ButtonCircle';
import { Tables } from '../../components/Table';

import { MdArchive } from "react-icons/md";

export default function Basket() {
  const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Preço', dataIndex: 'price', key: 'price' },
    { title: 'Duração', dataIndex: 'duration', key: 'duration' },
    {
      title: 'Remover',
      key: 'action',
      render: () => (
        <ButtonCircle shape="circle" icon={<MdDelete />} size={'large'} />
      ),
    }
  ];

  const data = [
    {
      key: 1,
      name: 'Limpreza dental',
      price: 'R$ 32.00',
      duration: '50 min',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Extrção dentaria',
      price: 'R$ 42.00',
      duration: '120 min',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Canal',
      price: 'R$ 29.00',
      duration: '60 min',
      description: 'This not expandable',
    },
  ];

  return (
    <Tables
      columns={columns}
      dataSource={data}
      bordered
      title={() =>
        <Badge count={3}>
          <Tooltip title="Quantidade de serviços" color={'#666680'} key={'#666680'}>
            <AvatarMod type="primary" icon={<MdArchive />} />
          </Tooltip>
        </Badge>}
      footer={() =>
        <>
          <ButtonAtd type="primary" shape="round" size={'large'}>
            Iniciar Atendimento
          </ButtonAtd>
          <Total>
            <span>Total</span>
            <strong>R$ 32.00</strong>
          </Total>
        </>
      }
    />
  );
}
