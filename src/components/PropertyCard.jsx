import React from "react";

const PropertyCard = ({ image, title, location, bedrooms, bathrooms, size, price, builder }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[350px]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 text-sm font-semibold rounded">
          For Sale
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <div className="flex items-center space-x-4 text-gray-600 mt-2">
          <span>🛏 {bedrooms} Bedrooms</span>
          <span>🛁 {bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-600 mt-2">
          <span>📏 {size} SF</span>
          <span>🏗 {builder}</span>
        </div>
        <div className="mt-3">
          <p className="text-lg font-bold text-sky-600">Starts From ₹ {price.toLocaleString()}</p>
        </div>
        <div className="mt-4">
          <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition">
            Detail
          </button>
        </div>
      </div>
    </div>

  );
};





export default PropertyCard;
