import axios from "axios";
import { useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import Loading from "../../Loading";
import ProductCard from "../../../Multiplay/ProductCard";

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latestData, setLatestData] = useState(true);
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await axios
        .get(`https://cap-store-server.onrender.com/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setWishList(res.data);
          setLoading(false);
        });
    };

    if (userData._id && token) {
      fetch();
    }
  }, [token, userData._id, latestData]);

  // console.log(wishList);
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center  text-black">
          My Wishlist
        </h2>
        <div className="border-b-2 border-black mt-5"></div>
        <div>
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              {wishList.length > 0 ? (
                <div className="grid grid-cols-3 gap-2 mt-5">
                  {wishList.map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                      isWishlist
                      setLatestData={setLatestData}
                    ></ProductCard>
                  ))}
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <h1>NO PRODUCTS</h1>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
