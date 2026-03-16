import { Link } from 'react-router';
import styled from 'styled-components';

export function Header() {
  return(
    <Nav>
      <StyledLink to="/">
        <h2>AliVolt</h2>
      </StyledLink>
      <NavMenu>
        <StyledLink to="/" >Home</StyledLink>
        <StyledLink to="/car/falcon" >Falcon EV</StyledLink>
        <StyledLink to="/car/storm" >Storm EV</StyledLink>
        <StyledLink to="/car/horizon" >Horizon EV</StyledLink>
        <StyledLink to="/" >Shop</StyledLink>
      </NavMenu>
      <RightMenu>
        <StyledLink to="#">Account</StyledLink>
        <StyledLink to="#">Menu</StyledLink>
      </RightMenu>
    </Nav>
  );
}

const Nav = styled.div`
  position:fixed;
  top:0;
  width:100%;
  height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 40px;
  background:white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index:10;

  h2 {
  font-weight: bold;
  }
`

const NavMenu = styled.div`
  display: flex;
  gap: 25px;

@media(max-width:768px){
  display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`

const RightMenu = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 50px;
`