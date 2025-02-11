import React from "react";

const properties = [
  {
    city: "GURUGRAM",
    title: "Luxury Flats in Gurugram",
    image: "gurgaon.jpg",
  },
  {
    city: "NEW CHANDIGARH",
    title: "Luxury Flats in New Chandigarh",
    image: "chd.jpg",
  },
  {
    city: "ZIRAKPUR",
    title: "Luxury Property in Zirakpur",
    image: "zrk.jpg",
  },
  {
    city: "MOHALI",
    title: "Luxury Property in Mohali",
    image: "sas.jpg",
  },
  {
    city: "MUMBAI",
    title: "Luxury Property in Mumbai",
    image: "mumbai.jpg",
  },
  {
    city: "PANCHKULA",
    title: "Luxury Property in Panchkula",
    image: "pnch.jpg",
  },
];

const PropertyCard = ({ city, title, image }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg group">
    {/* Image with zoom effect */}
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
    
    {/* City label */}
    <div className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded">
      {city}
    </div>

    {/* Title and link */}
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <a href="#" className="text-sm underline">See all Listings →</a>
    </div>
  </div>
);

const PropertyGrid = () => {
  return (
    <section className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-blue-500 font-semibold">Browse popular properties</p>
        <h2 className="text-3xl font-bold mb-6">Find Properties In Your City</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
