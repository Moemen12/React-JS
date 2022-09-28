import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const api_url1 = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  const params = useParams();
  useEffect(() => {
    fetch(`${api_url1}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return <Product product={product} showButton={false} />;
}
export default ProductDetails;
