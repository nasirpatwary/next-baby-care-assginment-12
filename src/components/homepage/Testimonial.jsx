"use client";
import { Users, Heart, Award, Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";

// import required modules
import { EffectCoverflow, FreeMode, Autoplay } from "swiper/modules";

const stats = [
  {
    label: "Happy Families",
    value: "2,500+",
    icon: <Users className="text-primary w-6 h-6" />,
  },
  {
    label: "Care Hours",
    value: "150k+",
    icon: <Heart className="text-secondary w-6 h-6" />,
  },
  {
    label: "Expert Caregivers",
    value: "120+",
    icon: <Award className="text-accent w-6 h-6" />,
  },
  {
    label: "Avg. Rating",
    value: "4.9/5",
    icon: <Star className="text-warning w-6 h-6" />,
  },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Mother of Two",
    content:
      "The baby care service was a lifesaver. Our caregiver was so gentle and professional, giving us the peace of mind we desperately needed.",
    img: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David Miller",
    role: "Son of Elderly Patient",
    content:
      "My father is much happier and more active now. The elderly support team treat him like family, not just a client.",
    img: "https://i.pravatar.cc/150?u=david",
  },
  {
    name: "Sarah Jenkins",
    role: "Mother of Two",
    content:
      "The baby care service was a lifesaver. Our caregiver was so gentle and professional, giving us the peace of mind we desperately needed.",
    img: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David Miller",
    role: "Son of Elderly Patient",
    content:
      "My father is much happier and more active now. The elderly support team treat him like family, not just a client.",
    img: "https://i.pravatar.cc/150?u=david",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Success Metrics (Stats) */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <div className="stats shadow-xl w-full grid grid-cols-1 md:grid-cols-4 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 transition-colors">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat place-items-center md:place-items-start border-gray-100 dark:border-slate-800"
              >
                <div className="stat-figure text-primary opacity-80 dark:opacity-100">
                  {stat.icon}
                </div>
                <div className="stat-title text-gray-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
                <div className="stat-value text-primary dark:text-blue-500">
                  {stat.value}
                </div>
                <div className="stat-desc dark:text-slate-500">Since 2020</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-xl mx-auto">
            Real stories from families we've had the honor to serve.
          </p>
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          speed={1500}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          effect={"coverflow"}
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
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="card bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-slate-800 h-full transition-colors duration-300">
                <div className="card-body relative pt-12">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 dark:text-primary/20" />
                  <p className="italic text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                    "{t.content}"
                  </p>

                  <div className="divider dark:before:bg-slate-800 dark:after:bg-slate-800 opacity-50"></div>

                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-white dark:ring-offset-slate-900 ring-offset-2">
                        <img src={t.img} alt={t.name} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-none text-gray-900 dark:text-white">
                        {t.name}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-slate-400">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
