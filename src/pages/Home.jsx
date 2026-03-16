import cars from '../data/cars';
import { CarSection } from "../components/CarSection";

function Home() {
  return(
    <div>
      {cars.map((car) => (
        <CarSection key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Home