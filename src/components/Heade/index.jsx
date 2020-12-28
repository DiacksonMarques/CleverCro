import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Basket } from './styles';
import logo from '../../assets/images/logo.png';

//import { useSelector } from 'react-redux';

export default function Header() {

  //const basketSize = useSelector(state => state.service.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="MeshaCro" />
      </Link>

      <Basket to="/basket">
        <div>
          <strong>Meus Serviços</strong>
          <span> 3 itens</span>
        </div>
        <MdShoppingBasket size={106} color="#fff" />
      </Basket>
    </Container>
  );
}
