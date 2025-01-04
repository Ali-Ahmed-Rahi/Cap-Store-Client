import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img4 from "../../assets/Banner/Screen-Shot-2020-09-30-at-4.46.36-pm-750x393.png";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full h-screen object-cover "
            src={img4}
            alt="banner"
          />

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute bottom-96 right-0 transform -translate-x-1/4 text-center z-10 ">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
              Welcome to the Cap Chronicles
            </h2>
            <p className="mt-4 text-lg text-gray-200 font-semibold">
            Step up your style game with our premium caps. From snapbacks <br /> to dad hats, we’ve got the perfect fit for your vibe. <br /> Top off your look today
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-slate-400 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
