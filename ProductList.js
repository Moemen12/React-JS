import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function Productlist() {
  const values = useContext(ProductsContext);

  return (
    <div className="navbar">
      {values.map((value) => {
        return <h1 key={value.id}> {value.title} </h1>;
      })}
    </div>
  );
}
export default Productlist;
