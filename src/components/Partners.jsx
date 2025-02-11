import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const partners = [
  { name: "Omaxe", logo: "omaxe.jpg" },
  { name: "Aerovista", logo: "aerovista.jpg" },
  { name: "Trishla City", logo: "trish.jpg" },
  { name: "Gillco", logo: "GILLCO.jpg" },
  { name: "Sushma", logo: "SUSHMA.jpg" },
  { name: "Godrej", logo: "godrej.jpg" },
  { name: "M3M", logo: "M3M.jpg" },
  { name: "SBP", logo: "sbp.jpg" },
  { name: "Suntec", logo: "SUNTEC.jpg" },
];

const Partners = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 ">Our Partners</h2>
      <Swiper 
        slidesPerView={5}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className=" flex justify-center">
            <img src={partner.logo} alt={partner.name} className="h-20" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
