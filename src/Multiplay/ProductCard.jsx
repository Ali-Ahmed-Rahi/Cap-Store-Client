import axios from "axios";
import useUserData from "../Hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({ product, isWishlist, setLatestData }) => {
  const userData = useUserData();
  const userEmail = userData.email;
  const productId = product._id;

  // console.log(userEmail,productId);

  const handleWishList = async () => {
    await axios
      .patch("https://cap-store-server.vercel.app/wishlist/add", {
        userEmail,
        productId,
      })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Your WishList",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  // data remove from wish list
  const handleDeleteWishList = async () => {
    await axios
      .patch("https://cap-store-server.vercel.app/wishlist/remove", {
        userEmail,
        productId,
      })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Removed Your WishList",
            showConfirmButton: false,
            timer: 1500,
          });
          setLatestData((prev) => !prev);
        }
      });
  };
  return (
    <>
      <div className="lg:w-96 rounded-lg p-2 border-black text-white border-2">
        <figure>
          <img
            src={product.image}
            alt="Product Image"
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>
        <div className="p-4 uppercase">
          <h2 className="text-xl font-bold text-center">{product.title}</h2>
          <h2 className="font-bold mt-1">Brand:{product.brand}</h2>
          <h2 className="font-semibold mt-1">category:{product.category}</h2>
          <h2 className="font-semibold mt-1">
            Price:<span className="text-red-500">${product.price}</span>
          </h2>
          <p className="text-sm uppercase mt-1">
            {product.description.length < 50
              ? `${product.description}`
              : `${product.description.slice(0, 50)}...`}
          </p>
          <div className="text-center mt-3">
            {isWishlist ? (
              <button
                onClick={handleDeleteWishList}
                className="btn bg-red-500 w-full"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={handleWishList}
                className="btn bg-green-500 text-white font-bold w-full"
              >
                WishList
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
