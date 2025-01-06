import { useEffect } from "react";
import Vdo from "../../assets/Banner/5485148-hd_1920_1080_25fps.mp4";
import Aos from "aos";
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative h-80 lg:h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
      >
        <source src={Vdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center lg:justify-center mx-5">
        <div className="text-center text-white " data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold">
            Black Friday Sale
          </h1>
        </div>
      </div>
      <div
        className="absolute lg:top-72 lg:right-64 sm:top-60 sm:right-32 top-24 right-5"
        data-aos="zoom-in"
      >
        <div className="bg-green-600 w-16 sm:w-36 md:w-40 lg:w-40 h-16 sm:h-36 md:h-40 lg:h-40 rounded-full flex items-center justify-center">
          <h3 className="uppercase text-xs sm:text-xl md:text-2xl lg:text-2xl font-bold text-white">
            60% Off
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
