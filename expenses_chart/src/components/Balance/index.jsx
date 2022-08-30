import React from 'react';
import logo from '../../img/logo.svg';
import Container from 'react-bootstrap/Container';
import { WrapperBalance } from './Balance.styled';



export function Balance() {
  return (
    <Container className='center-block container-sm'>
        <WrapperBalance>
            <div>
                <h2 className='title'>My balance</h2>
                <p className='amount'>$921.28</p>
            </div>
            <img src={logo} alt="circles" />
         </WrapperBalance>
    </Container>
  )
}
