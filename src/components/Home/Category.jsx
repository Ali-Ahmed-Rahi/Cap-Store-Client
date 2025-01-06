import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

const Category = () => {
  return (
    <>
      <section className="hidden lg:block mt-10 lg:mt-16">
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
          <SwiperSlide>
            <img
              src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file"
              alt=""
            />
            <div className=" text-center">
              <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-white">
                Nike
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file"
              alt=""
            />
            <div className=" text-center">
              <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-white">
                Nike
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file"
              alt=""
            />
            <div className=" text-center">
              <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-white">
                Nike
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file"
              alt=""
            />
            <div className=" text-center">
              <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-white">
                Nike
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file"
              alt=""
            />
            <div className=" text-center">
              <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-white">
                Nike
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.takealot.com/covers_images/ad89221d89544d1084279b16f61a4f4a/s-pdpxl.file"
              alt=""
            />
            <div className=" text-center">
              <h2 className="text-xs lg:text-3xl font-semibold mx-2 text-white">
                Nike
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* part 2 */}
      <section className="lg:hidden block">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
