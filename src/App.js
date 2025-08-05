import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home/Home';
import Flota from './pages/Flota/Flota';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/flota" element={<Flota/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
