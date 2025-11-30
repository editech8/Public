import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "./css/ProductShowCase.css";

const ProductShowCase = () => {
  return (
    <>
      <div className="mainSlider">
        <Swiper
          pagination = {{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={1500}
          loop={true}
          className="mySwiper"
          slidesPerView={1}
        >
          <SwiperSlide><img src="/SliderImg/iphone.png" alt="" className="imgSlide"/></SwiperSlide>
          <SwiperSlide><img src="/SliderImg/laptop.png" alt="" className="imgSlide"/></SwiperSlide>
          <SwiperSlide><img src="/SliderImg/samsung.png" alt="" className="imgSlide"/></SwiperSlide>
          <SwiperSlide><img src="/SliderImg/keybord.png" alt="" className="imgSlide"/></SwiperSlide>
          <SwiperSlide><img src="/SliderImg/mouse.png" alt="" className="imgSlide"/></SwiperSlide>
          <SwiperSlide><img src="/SliderImg/headphone.png" alt="" className="imgSlide"/></SwiperSlide>
          <SwiperSlide><img src="/SliderImg/watch.png" alt="" className="imgSlide"/></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductShowCase;
