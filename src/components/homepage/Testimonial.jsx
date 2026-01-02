"use client"
import { Users, Heart, Award, Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

// import required modules
import { EffectCoverflow, FreeMode, Autoplay } from 'swiper/modules';


const stats = [
  { label: 'Happy Families', value: '2,500+', icon: <Users className="text-primary w-6 h-6" /> },
  { label: 'Care Hours', value: '150k+', icon: <Heart className="text-secondary w-6 h-6" /> },
  { label: 'Expert Caregivers', value: '120+', icon: <Award className="text-accent w-6 h-6" /> },
  { label: 'Avg. Rating', value: '4.9/5', icon: <Star className="text-warning w-6 h-6" /> },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Mother of Two",
    content: "The baby care service was a lifesaver. Our caregiver was so gentle and professional, giving us the peace of mind we desperately needed.",
    img: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Miller",
    role: "Son of Elderly Patient",
    content: "My father is much happier and more active now. The elderly support team treat him like family, not just a client.",
    img: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Sarah Jenkins",
    role: "Mother of Two",
    content: "The baby care service was a lifesaver. Our caregiver was so gentle and professional, giving us the peace of mind we desperately needed.",
    img: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Miller",
    role: "Son of Elderly Patient",
    content: "My father is much happier and more active now. The elderly support team treat him like family, not just a client.",
    img: "https://i.pravatar.cc/150?u=david"
  }
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-base-200/50">
      <div className="container mx-auto px-4">
        
        {/* Success Metrics (Stats) */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <div className="stats shadow-xl w-full grid md:grid-cols-4 bg-base-100">
            {stats.map((stat, index) => (
              <div key={index} className="stat place-items-center md:place-items-start">
                <div className="stat-figure opacity-80">{stat.icon}</div>
                <div className="stat-title text-base-content/60 font-medium">{stat.label}</div>
                <div className="stat-value text-primary">{stat.value}</div>
                <div className="stat-desc">Since 2020</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-base-content/70">Real stories from families we've had the honor to serve.</p>
        </div>

        {/* Testimonials Grid */}
    <>
      <Swiper
      speed={1500}
       slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, FreeMode]}
        className="mySwiper"
      >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="card bg-base-100 shadow-lg border border-base-200">
              <div className="card-body relative pt-12">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <p className="italic text-base-content/80 text-lg">"{t.content}"</p>
                
                <div className="divider opacity-50"></div>
                
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={t.img} alt={t.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none">{t.name}</h4>
                    <span className="text-sm text-base-content/60">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>

      </div>
    </section>
  );
};

export default Testimonial;