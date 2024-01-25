import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import BuyNowForm from './Pages/BuyNowForm';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Product/:id' element={<Product />} />
                <Route path='/BuyNowForm' element={<BuyNowForm/>} />
      </Routes>
      <footer> © made by kinu ganjhu </footer>
    </>
  );
}
