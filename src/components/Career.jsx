import { 
  FaUser, FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap, FaBuilding, 
  FaMapMarkerAlt, FaRupeeSign, FaFileUpload 
} from "react-icons/fa";
import { BsWhatsapp, BsFacebook, BsLinkedin, BsPinterest } from "react-icons/bs";
import Footer from "./Footer";

function Career() {
  return (
      <>
          <div>
              {/* Top Contact Bar */}
              <div className="bg-sky-600 text-white flex justify-between items-center px-6 py-2 text-sm">
                  <div className="flex items-center space-x-4 py-4">
                      <div className="flex items-center">
                          <FaPhone className="mr-1" /> 1800-121-0134, 8288971800, 8558806719
                      </div>
                      <div className="flex items-center">
                          <FaEnvelope className="mr-1" /> care@ccsrealestates.com
                      </div>
                  </div>
                  <div>A51800046187, HRERA-PKL-REA-1578-2023, PBRERA-CHD04-REA0254</div>
              </div>
              
              {/* Main Navbar */}
              <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
                  <div className="flex items-center">
                      <img src="logo.png" alt="CCS Real Estate Pvt. Ltd." className="h-10 md:h-12 object-contain" />
                  </div>
                  <ul className="flex space-x-6 text-black font-medium">
                      {['Home', 'Property', 'About Us', 'Contact Us', 'Media', 'Blog', 'Career'].map((item, index) => (
                          <li key={index} className="hover:text-sky-600 cursor-pointer">{item}</li>
                      ))}
                  </ul>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                      💬 Get Quote
                  </button>
              </nav>
          </div>
          
          {/* Career Section */}
          <div className="bg-gray-100 min-h-screen">
              <div className="bg-sky-600 text-white py-6 text-center">
                  <h1 className="text-3xl font-semibold">Apply Now</h1>
                  <p className="mt-2 text-sm">
                      <span className="text-gray-300">HOME</span> / <span>APPLY NOW</span>
                  </p>
                  <div className="mt-4 flex justify-center space-x-4">
                      {[BsFacebook, BsWhatsapp, BsLinkedin, BsPinterest].map((Icon, index) => (
                          <a key={index} href="#" className="bg-white p-2 rounded-full">
                              <Icon size={20} className={`text-${index === 1 ? 'green-500' : 'sky-600'}`} />
                          </a>
                      ))}
                  </div>
              </div>

              {/* Apply Now Section */}
              <div className="max-w-5xl mx-auto py-10">
                  <h2 className="text-2xl font-bold text-center mb-6">Apply Now</h2>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
                      {[{ icon: FaUser, placeholder: "Name", type: "text" },
                        { icon: FaEnvelope, placeholder: "Email Id", type: "email" },
                        { icon: FaPhone, placeholder: "Contact No*", type: "text" },
                        { icon: FaPhone, placeholder: "Alternative Contact No", type: "text" },
                        { icon: FaGraduationCap, placeholder: "Education", type: "text" },
                        { icon: FaBriefcase, placeholder: "Total Work Exp. (In years)*", type: "text" },
                        { icon: FaBuilding, placeholder: "Current Organisation", type: "text" },
                        { icon: FaMapMarkerAlt, placeholder: "Current Work Location", type: "text" },
                        { icon: FaRupeeSign, placeholder: "Current CTC", type: "text" },
                        { icon: FaRupeeSign, placeholder: "Expected CTC*", type: "text" }
                      ].map(({ icon: Icon, placeholder, type }, index) => (
                          <div key={index} className="flex items-center border p-2 rounded-md">
                              <Icon className="text-gray-500 mr-2" />
                              <input type={type} placeholder={placeholder} className="w-full outline-none" />
                          </div>
                      ))}
                      
                      {/* Gender Selection */}
                      <div className="flex items-center border p-2 rounded-md">
                          <FaUser className="text-gray-500 mr-2" />
                          <select className="w-full outline-none">
                              <option>--Gender--</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                          </select>
                      </div>
                      
                      {/* Apply For Selection */}
                      <div className="flex items-center border p-2 rounded-md">
                          <FaBriefcase className="text-gray-500 mr-2" />
                          <select className="w-full outline-none">
                              <option>--Apply For--</option>
                              <option>Developer</option>
                              <option>Designer</option>
                              <option>Marketing</option>
                          </select>
                      </div>
                      
                      {/* Resume Upload */}
                      <div className="col-span-2 flex items-center border p-2 rounded-md">
                          <FaFileUpload className="text-gray-500 mr-2" />
                          <input type="file" className="w-full" />
                      </div>
                      
                      {/* Submit Button */}
                      <div className="col-span-2 flex justify-center">
                          <button className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700">
                              Apply Now
                          </button>
                      </div>
                  </form>
              </div>

              {/* Contact Info */}
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 pb-10">
                  {[{ title: "Contact Us", text: "+91-8558806706" },
                    { title: "Mail Us", text: "hr@ccsrealestates.com" },
                    { title: "Visit", text: "B-210, 2nd Floor, Elante Offices, Industrial Area Phase - 1, Chandigarh" }
                  ].map(({ title, text }, index) => (
                      <div key={index} className="flex-1 bg-sky-600 text-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-xl font-bold mb-2">{title}</div>
                          <p className="text-lg">{text}</p>
                      </div>
                  ))}
              </div>
          </div>
          
          <Footer />
      </>
  );
}

export default Career;