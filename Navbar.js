import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function Navbar(props) {
  const value = useContext(ProductsContext);

  console.log(value);
  return (
    <div className="navbar">
      <h1>products count: {value.length} </h1>
    </div>
  );
}

Navbar.Toogle = function () {
  return <h1>Toogle</h1>;
};

export default Navbar;
