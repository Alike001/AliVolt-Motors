import{ useParams } from 'react-router-dom';
import styled from 'styled-components';
import cars from '../data/cars';

function CarDetails() {
  const { id } = useParams();

  const car = cars.find((c) =>c.id===id);
  return(
    <Container>
      <img src={car.image} alt={car.name} />
      <h1>{car.name}</h1>
      <p>{car.description}</p>
      <h3>Top Speed: {car.speed}</h3>
      <h3>Range: {car.range}</h3>
      <h3>Price: {car.price}</h3>
      <button>Order Now</button>
    </Container>
  );
}

export default CarDetails

const Container = styled.div`
  padding: 120px;
  text-align: center;

 img {
  width: 100%;
  max-width: 900px;
  height: auto;
  border-radius: 10px;
  margin: 20px auto;
  display: block;
  }
  
  button {
    padding: 15px 30px;
    margin-top: 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

   @media (max-width: 768px) {
    padding: 20px;

    img {
      max-width: 100%;
    }
  }
`