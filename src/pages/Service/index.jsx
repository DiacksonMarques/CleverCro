import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ContentBranco, ButtonAtd } from './style';
import { Row, Col, Typography, Divider } from 'antd'
const { Title } = Typography;

export default function Service() {
  return (
    <ContentBranco>
      <Divider orientation="left">Informações do serviço</Divider>
      <Row>
        <Col span={12}>
          <Title level={5}>
            Nome:
          </Title>
          <Title level={4}>
            Limpreza
          </Title>
        </Col>
        <Col span={12}>
          <Title level={5}>
            Preço:
          </Title>
          <Title level={4}>
            R$32.00
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={5}>
            Duração:
          </Title>
          <Title level={4}>
            50 min
          </Title>
        </Col>
      </Row>
      <Divider orientation="left">Descrição</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Row>
        <ButtonAtd type="primary" icon={<MdAddShoppingCart />} shape="round" size={'large'}>
          Adicionar Serviço
        </ButtonAtd>
      </Row>
    </ContentBranco>
  );
}
