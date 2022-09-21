import React, { useState } from 'react'
import styled  from 'styled-components'
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';


// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [ burgerStatus, setBurgerStatus ] = useState(false)

  return (
    <Container>

      <a>
        <img src="images/logo.svg" alt="logo" />
      </a>

      <Menu>  

        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>

      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>

        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <FiMenu /> 
        </CustomMenu>
      </RightMenu>

      <BurgerNav show ={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)}>
          <GrClose /> 
        </CustomClose>
        <li><a href="#">Exiting Inventory</a></li>
        <li><a href="#">use Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">chargin</a></li>
        <li><a href="#">powerwall</a></li>
        <li><a href="#">commercial energy</a></li>
        <li><a href="#">utilities</a></li>
        <li><a href="#">test drive</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`

  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

`

const Menu = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 0 10px;
    flex-wrap: nowrap;
    font-weight: 500;
    
  }

  @media(max-width: 768px) {
    display: none;
  }

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 10px;
    font-weight: 600;
    
  }
`

const CustomMenu = styled.div`
  cursor: pointer;
`
const BurgerNav = styled.div`

  width: 300px;
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 16;
  padding: 20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s ease-in;

  li {
    list-style: none;
    text-align: start;
    padding: 15px 0;
    border-bottom: 1px solid rgb(0, 0, 0, .2);

    a {
      font-weight: 500;
      
    }
  }

`

const CustomClose = styled.div`

  text-align: end;
  cursor: pointer;

`
