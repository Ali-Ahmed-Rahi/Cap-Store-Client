import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Category = () => {
  return (
      <>
      <section className=" mt-10 lg:mt-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide >
            <img src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file" alt="" />
            <div className=" text-center">
            <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-slate-950">
              Nike
            </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file" alt="" />
            <div className=" text-center">
            <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-slate-950">
              Nike
            </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file" alt="" />
            <div className=" text-center">
            <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-slate-950">
              Nike
            </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file" alt="" />
            <div className=" text-center">
            <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-slate-950">
              Nike
            </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file" alt="" />
            <div className=" text-center">
            <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-slate-950">
              Nike
            </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file" alt="" />
            <div className=" text-center">
            <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-slate-950">
              Nike
            </h2>
            </div>
          </SwiperSlide>
         
          
        </Swiper>
      </section>
    </>
  );
};

export default Category;
