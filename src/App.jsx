import { Route, Routes } from "react-router-dom";

import Home from './views/Home/Home';
import PageProduct from './views/pageProducts/PageProduct';
import ProductDatil from './views/productDetails/productDetail';
import Header from "./components/Header/Header";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PageProduct />} />
        <Route path="/products/:_id" element={<ProductDatil />} />
      </Routes>
    </div>
  );
}

export default App;