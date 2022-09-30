import Navbar from "./components/Navbar";
import Productlist from "./components/ProductList";
import ProductsProvider from "./context/ProductsContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Navbar />
        <Navbar.Toogle />
        <Productlist />
      </ProductsProvider>
    </div>
  );
}
