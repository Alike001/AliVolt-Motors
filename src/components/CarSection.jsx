import { Link } from 'react-router';
import { useDispatch } from "react-redux"
import { selectCars } from "../redux/carSlice"
import styled from 'styled-components';

export function CarSection({car}) {
  const dispatch = useDispatch()
  return(
    <Container image={car.image}>
      <Overlay>
        <h1>{car.name}</h1>
        <p>{car.description}</p>
        <Buttons>
          <Link to={`/car/${car.id}`}>
            <button onClick={() => dispatch(selectCars(car))}>
              Explore
            </button>
          </Link>
        </Buttons>
      </Overlay>
    </Container>

  );
  
}

const Container = styled.div`
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

  animation: fadeIn 1.5s ease;

  @keyframes fadeIn {
      from {
      opacity: 0;
      transform: translateY(10px);
    }
    to  {
      opacity: 1;
      transform: translateY(0);
      }
  }
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
    background:black;
    color:white;
  }
    
  button:hover{
  transform:scale(1.05);
  }
`