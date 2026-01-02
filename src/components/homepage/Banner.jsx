"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Container from '../shared/Container';
import ButtonComponent from '../shared/ButtonComponent';

const bannerData = [
  {
    id: 1,
    title: "Safe & Verified Caregiving Team",
    subtitle: "Every member of our team undergoes rigorous identity verification and criminal background checks to ensure your family's absolute safety and security.",
    btnText: "Book a Nanny"
  },
  {
    id: 2,
    title: "Reliable Child Care for Busy Parents",
    subtitle: "Ensure your child's safety and growth with our certified nannies. We provide a nurturing environment, early learning support, and 24/7 supervision.",
    btnText: "Find a Caregiver"
  },
  {
    id: 3,
   title: "Trusted Professional Patient Care",
    subtitle: "Our licensed nursing experts provide hospital-grade medical support, post-surgery recovery, and vital monitoring for a faster, safer healing process.",
    btnText: "Get Medical Care"
  }
];

const Banner = () => {
  return (
    <Container className="mt-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id}>
              <div className="text-center px-6 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-base-content/80 max-w-[70ch] mx-auto leading-relaxed">
                    {slide.subtitle}
                </p>
                <div className='text-center inline-block'>
                <ButtonComponent>{slide.btnText}</ButtonComponent>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banner;