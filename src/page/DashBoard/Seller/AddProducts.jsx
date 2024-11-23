import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onsubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const image = data.image;
    const description = data.description;
    const sellerEmail = user.email;

    // console.log(data);

    const product = {
      title,
      brand,
      price,
      stock,
      category,
      image,
      description,
      sellerEmail,
    };

    const token = localStorage.getItem("access-token");
    // console.log(token);

    axios
      .post("https://cap-store-server.onrender.com/add-products", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Add Successfully !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center border-b-4 border-black mt-5">
          Add Product
        </h2>
      </div>
      <div className="mt-10 font-semibold">
        <form
          onSubmit={handleSubmit(onsubmit)}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="flex-col md:flex-row lg:flex gap-5">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="username" className="block ">
                Title
              </label>
              <input
                type="text"
                id="Product Title"
                placeholder="Product Title"
                {...register("title", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-slate-200"
              />
              {errors.title && (
                <p className="text-red-500 font-light">Title is required</p>
              )}
            </div>

            {/*brand section */}

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="username" className="block ">
                Brand
              </label>
              <input
                type="text"
                id="Product Title"
                placeholder="Product Brand"
                {...register("brand", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-slate-200"
              />
              {errors.brand && (
                <p className="text-red-500 font-light">Brand is required</p>
              )}
            </div>
          </div>
          {/* 2nd Line  */}

          <div className="flex-col md:flex-row lg:flex gap-5">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="username" className="block ">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Product Price"
                {...register("price", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-slate-200"
              />
              {errors.price && (
                <p className="text-red-500 font-light">Price is required</p>
              )}
            </div>

            {/*Stock Section */}

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="username" className="block ">
                Stock
              </label>
              <input
                type="number"
                id=""
                placeholder="Stock Quantity"
                {...register("stock", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-slate-200"
              />
              {errors.stock && (
                <p className="text-red-500 font-light">Stock is required</p>
              )}
            </div>
          </div>

          <div className="flex-col md:flex-row lg:flex gap-5">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="username" className="block ">
                Category
              </label>
              <input
                type="text"
                placeholder="Product Category"
                {...register("category", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-slate-200"
              />
              {errors.category && (
                <p className="text-red-500 font-light">Category is required</p>
              )}
            </div>
            {/* image */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="username" className="block ">
                Image
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("image", { required: true })}
                className="w-full px-4 py-3 rounded-md bg-slate-200"
              />
              {errors.image && (
                <p className="text-red-500 font-light">Image URL is required</p>
              )}
            </div>
          </div>
          {/* description */}

          <div className="space-y-1 text-sm w-full">
            <label htmlFor="username" className="block ">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Product Description"
              {...register("description", { required: true })}
              className="w-full px-4 py-3 rounded-md bg-slate-200"
            />
            {errors.price && (
              <p className="text-red-500 font-light">Description is required</p>
            )}
          </div>
          <div className="my-8 text-center">
            <button type="submit" className="btn btn-secondary w-full">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
