import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Fetured = () => {
  return (
    <div className="bg-green-600 lg:py-16 py-8">
      <div className="container mx-auto gap-6 flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-between items-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mx-5 sm:mx-10 lg:mx-20">
          Grab This Limited Time Offer
        </h2>
        <Link to='/product' className="btn bg-white text-black rounded-full mx-5 sm:mx-10 lg:mx-40 w-40 sm:w-44 md:w-52 lg:w-52 gap-5 hover:shadow-2xl hover:shadow-white hover:bg-white text-lg mt-5 sm:mt-0">
          Products <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Fetured;
