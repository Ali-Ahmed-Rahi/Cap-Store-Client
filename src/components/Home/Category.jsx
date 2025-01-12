import img from "../../assets/Category/1.jpg";
import img2 from "../../assets/Category/2.jpg";
import img3 from "../../assets/Category/3.jpg";
import img4 from "../../assets/Category/4.webp";
import img5 from "../../assets/Category/5.jpg";
import img6 from "../../assets/Category/6.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; 

const Category = () => {
  return (
    <div>
      {/* Large screen layout */}
      <div className="hidden lg:block">
        <div className="flex gap-7 justify-center">
          <div className="w-2/5 h-72">
            <div className="p-2 mt-2 bg-green-600 rounded-l-full flex gap-5">
              <img className="w-64 rounded-l-full" src={img} alt="Category 1" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                doloribus repellendus architecto quae iste illum adipisci,
                aliquam beatae provident quos inventore dolore natus consectetur
                quibusdam perspiciatis? Obcaecati voluptates, cupiditate
                quibusdam doloribus blanditiis, quos odio quis commodi
                praesentium id odit molestiae!
              </p>
            </div>
          </div>
          <div className="w-1/5 h-72 rounded-xl">
            <div className="p-2 flex mt-2 bg-green-600 rounded-lg">
              <img className="w-64 mx-auto" src={img2} alt="Category 2" />
            </div>
          </div>
          <div className="w-1/5 h-72 rounded-xl">
            <div className="p-2 flex mt-2 bg-green-600 rounded-lg">
              <img className="w-64 mx-auto" src={img3} alt="Category 3" />
            </div>
          </div>
        </div>
        <div className="flex gap-7 justify-center mt-5">
          <div className="w-1/5 h-72 rounded-xl">
            <div className="p-2 flex mt-2 bg-green-600 rounded-lg">
              <img className="w-64 mx-auto" src={img4} alt="Category 4" />
            </div>
          </div>
          <div className="w-1/5 h-72 rounded-xl">
            <div className="p-2 flex mt-2 bg-green-600 rounded-lg">
              <img className="w-64 mx-auto" src={img6} alt="Category 6" />
            </div>
          </div>
          <div className="w-2/5 h-72">
            <div className="p-2 mt-2 bg-green-600 rounded-r-full flex gap-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                doloribus repellendus architecto quae iste illum adipisci,
                aliquam beatae provident quos inventore dolore natus consectetur
                quibusdam perspiciatis? Obcaecati voluptates, cupiditate
                quibusdam doloribus blanditiis, quos odio quis commodi
                praesentium id odit molestiae!
              </p>
              <img
                className="w-64 rounded-r-full object-cover"
                src={img5}
                alt="Category 5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Small device layout */}
      <div className="lg:hidden block">
        <Swiper
          slidesPerView={1} // Fixed slidesPerView for better control
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  rounded-2xl"
        >
          <SwiperSlide>
            <img className="w-full" src={img} alt="Category 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img2} alt="Category 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img3} alt="Category 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img4} alt="Category 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img5} alt="Category 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img6} alt="Category 6" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
