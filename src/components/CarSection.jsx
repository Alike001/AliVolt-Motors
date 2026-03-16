import { Link } from 'react-router'
import styled from 'styled-components'

export function CarSection() {
  return(
    <Container>
      <Overlay>
        <h1>Falcon</h1>
        <p>This is an electric car.</p>
        <Buttons>
          <Link to="/">
          <button className="dark">Explore</button>
          <button className="light">Order Now</button>
          </Link>
        </Buttons>
      </Overlay>
    </Container>
  );
  
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url('/images/Falcon.jpg');
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  text-align: center;
  color:white;
  background:rgba(0,0,0,0.4);
  padding:40px;
  border-radius:10px;
`

const Buttons = styled.div`
  margin-top:20px;

  button {
  padding:12px 25px;
  margin:10px;
  border-radius:20px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  }

  .dark{
  background:black;
  color:white;
  }

  .light{
  background:white;
  color:black;
  }

  button:hover{
  transform:scale(1.05);
  }
`