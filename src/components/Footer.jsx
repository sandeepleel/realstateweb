
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 bg-sky-700 mt-2 mb-0">
      <div className="container mx-auto px-6 py-4 bg-opacity-15 font-bold bg-cover bg-center bg-repeat" style={{ backgroundImage: "url('city.jpg')" }}>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <img src="logo-icon.png" alt="CCS Logo" className="h-16 mb-4" />
            <p>Search Real Estate in Chandigarh - Buy, Sell and Rent Best Residential Properties in Chandigarh by Real Property owners, Dealers, Builders, and Real Estate Agents.</p>
            <p className="mt-2"><FaLocationDot></FaLocationDot> B-210, 2nd Floor, Elante Offices, Industrial Area Phase - 1, Chandigarh</p>
            <p><FaLocationDot></FaLocationDot> 314, Tower 4, DLF Corporate Greens, Sector 74, Gurgaon</p>
            <p><FaLocationDot></FaLocationDot> Supreme Headquarters, Office 1003, 10th Floor, Bandra, West Mumbai, Maharashtra</p>
            <p><IoIosMail></IoIosMail> care@ccsrealestates.com</p>
            <p><FaPhoneAlt></FaPhoneAlt> 1800-121-0134, 8288971800, 8558806719</p>
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Popular Searches</h3>
            <ul>
              <li>Our Projects</li>
              <li>Our Cities</li>
              <li>Property for Sale</li>
              <li>Photo Gallery</li>
              <li>Videos</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career With Us</li>
              <li>Login</li>
              <li>Terms & Conditions</li>
              <li>Policy of Use</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 ">
            <h3 className="text-lg font-semibold mb-3">Gallery</h3>
            <div className="grid grid-cols-2 gap-2">
              <img src="property1-ftr.jpg" alt="Property 1" className="rounded-lg" />
              <img src="propert-2-ftr.jpg" alt="Property 2" className="rounded-lg" />
              <img src="property-3-ftr.jpg" alt="Property 3" className="rounded-lg" />
              <img src="property-4-ftr.jpg" alt="Property 4" className="rounded-lg" />
            </div>
          </div>
        </div>

        
      </div>
      <div className="text-center mt-3  pt-2 mb-0 pb-0">
          <p>&copy; CCS Real Estate 2022. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
