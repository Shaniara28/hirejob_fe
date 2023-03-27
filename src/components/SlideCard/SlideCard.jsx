import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../styles/Slide.module.css';
import Profil1 from '../../assets/image/nial.png';
import Profil2 from '../../assets/image/Profil.png';
import Profil3 from '../../assets/image/harry.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

const SlideCard = () => {
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper swiper-container"
      >
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className={style.card}>
                <div>
                  <Image src={Profil3} className={style.cardImg} />
                </div>
                <div className={style.cardTitle}>
                  <h3>Nial Horan</h3>
                  <span>Web Developer</span>
                </div>
                <div className={style.cardContent}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-10">
            <SwiperSlide className="swiper-slide">
              <div className={style.card}>
                <div>
                  <Image src={Profil2} className={style.cardImg} />
                </div>
                <div className={style.cardTitle}>
                  <h3>Harry Styles</h3>
                  <span>Web Developer</span>
                </div>
                <div className={style.cardContent}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <SwiperSlide>
              <div className={style.card}>
                <div>
                  <Image src={Profil1} className={style.cardImg} />
                </div>
                <div className={style.cardTitle}>
                  <h3>Kim Taehyung</h3>
                  <span>Web Developer</span>
                </div>
                <div className={style.cardContent}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default SlideCard;
