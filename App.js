import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import About from "./component/About";
import ProductDetails from "./component/ProductDetails";
import Productlist from "./component/Productlist";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Productlist />
            </>
          }
        />

        <Route path="about" element={<About />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
