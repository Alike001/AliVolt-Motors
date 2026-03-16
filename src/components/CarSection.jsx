import { Link } from 'react-router'
import styled from 'styled-components'

export function CarSection({car}) {
  return(
    <Container image={car.image}>
      <Overlay>
        <h1>{car.name}</h1>
        <p>{car.description}</p>
        <Buttons>
          <Link to={`/car/${car.id}`}>
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
  background-image: url(${props => props.image});
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