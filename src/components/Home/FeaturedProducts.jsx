import { useEffect, useState } from "react";
import ProductCard from "../../Multiplay/ProductCard";
import axios from "axios";
import { NavLink } from "react-router-dom";


const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      axios
        .get(`https://cap-store-server.vercel.app/all-products`)
        .then((res) => {
          setProducts(
            Array.isArray(res.data) ? res.data : res.data.product || []
          );

          // console.log(res.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProducts([]);
        });
    };
    fetch();
  }, []);
  return (
    <>
      <div>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.objectId} product={product} />
            ))}
          </div>
        </div>
        
        
        <div className="mt-5 text-center">
          <NavLink
            to="/product"
            className="btn lg:w-72 bg-white text-black rounded-full hover:bg-white hover:shadow-2xl hover:shadow-white"
          >
            Show More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
