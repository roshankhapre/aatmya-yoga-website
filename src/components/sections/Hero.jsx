// components/sections/Hero.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroBg from "../../assets/yoga-sunset-beach-woman-doing-yoga-performing-asanas-enjoying-life-river.webp";
import heroBg2 from "../../assets/practicing-helmet-outline-green-sunset.webp";
import heroBg3 from "../../assets/woman-stretching-leg-by-back-beach.webp";

const slides = [
  {
    image: heroBg,
    title: "Reconnect with Your True Self",
    subtitle: "Online Yoga Classes, Workshops & Teacher Trainings for All",
  },
  {
    image: heroBg2,
    title: "Experience Inner Peace",
    subtitle: "Guided meditative yoga from the comfort of your home",
  },
  {
    image: heroBg3,
    title: "Flow with Nature",
    subtitle: "Transform your lifestyle through holistic yoga practices",
  },
];

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal-200 mix-blend-soft-light animate-float1"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-amber-100 mix-blend-soft-light animate-float2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-sky-100 mix-blend-soft-light animate-float3"></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !opacity-100",
          bulletActiveClass: "!bg-white !w-6 !h-2 !rounded-sm",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slide.image})`,
              }}
            >
              <div className="text-center px-4 max-w-2xl z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-6 tracking-wide leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">
                  {slide.subtitle}
                </p>
                <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full transition-all duration-500 border border-white/30 hover:border-white/50 backdrop-blur-sm hover:shadow-lg hover:scale-105">
                  Start Your Practice Today
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />

      {/* Subtle floating elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="animate-bounce-slow w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
