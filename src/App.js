import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Active from './pages/Active/Active';
import Completed from './pages/Completed/Completed';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/active' element={<Active></Active>}></Route>
      <Route path='/completed' element={<Completed></Completed>}></Route>
    </Routes>
  );
}

export default App;
