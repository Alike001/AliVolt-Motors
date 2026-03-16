import { Header } from './components/Header';
import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
