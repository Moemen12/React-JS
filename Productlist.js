import Product from "./Product";
import { useEffect, useState } from "react";
function Productlist() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductsInCategorie = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-info"
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getProductsInCategorie(cat);
              }}
              className="btn btn-info"
            >
              {cat}
            </button>
          );
        })}

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Productlist;
