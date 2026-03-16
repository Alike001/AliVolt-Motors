import { Header } from './components/Header';
import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/car/:id" element={<CarDetails/>} />
      </Routes>
    </>
  )
}

export default App
