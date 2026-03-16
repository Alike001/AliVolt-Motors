import { Link } from 'react-router'
import styled from 'styled-components'

export function Header() {
  return(
    <Hero>
      <h2>AliVolt</h2>
      <StyledLink to="/" >Home</StyledLink>
    </Hero>
  );
}

const Hero = styled.div`
position: fixed;
top: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
color: white;
padding: 10px;
zindex: 100;

h2 {
font-family: Roboto;
}`

const StyledLink = styled(Link)`
text-decoration: none;
color: white;
cursor: pointer;
`