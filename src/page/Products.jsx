import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Multiplay/SearchBar";
import Loading from "./Loading";
import FilterBar from "../Multiplay/FilterBar";
import ProductCard from "../Multiplay/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `https://cap-store-server.vercel.app/all-products?title=${search}&page${page}&limit=9&sort=${sort}&category=${category}&brand=${brand}`
        )
        .then((res) => {
          setProducts(
            Array.isArray(res.data) ? res.data : res.data.product || []
          );
          setUniqueBrand(
            Array.isArray(res.data) ? res.data : res.data.brands || []
          );
          setUniqueCategory(
            Array.isArray(res.data) ? res.data : res.data.category || []
          );

          setTotalPages(Math.ceil(res.data.totalProducts / 9));
          setLoading(false);
          console.log(res.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProducts([]);
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, brand, category, page]);

  // console.log(uniqueCategory);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="container mx-auto ">
      <h2 className=" pt-5 text-2xl font-bold text-center">All Products</h2>
      {/* Search */}
      <div className="flex justify-center w-full mb-6 pt-5 ">
        <SearchBar handleSearch={handleSearch} />
      </div>
      {/* Content */}
      <div className="lg:grid lg:grid-cols-12 gap-2">
        <div className="lg:col-span-2">
          <FilterBar
            setSort={setSort}
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>
        <div className=" lg:col-span-10 mx-auto">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-2xl lg:text-4xl font-bold">
                    No Products Found
                  </h1>
                </div>
              ) : (
                <div className="min-h-screen grid lg:grid-cols-3 gap-2">
                  {products.map((product) => (
                    <ProductCard key={product.objectId} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
          {/* pagination */}
          <div className="join flex  items-end justify-center mb-3 mt-3 ">
            <button
              onClick={() => handlePageChange(page - 1)}
              className="join-item btn"
              disabled={page === 1}
            >
              «
            </button>
            <p className="join-item btn text-white">{page}</p>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="join-item btn"
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
