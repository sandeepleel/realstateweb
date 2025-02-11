import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import PropertyCard from "./PropertyCard";
import PropertyGrid from "./PropertyGrid";
import Partners from "./Partners";
import VideoS from "./videoS";
import { FaMapMarkerAlt, FaHandHoldingUsd, FaHeadset, FaHandshake } from "react-icons/fa";
function Home() {
  const properties = [
    {
      image: "property-1.webp",
      title: "3 BHK Luxury 2394 SF Apartment in New Chandigarh",
      location: "Airport Road, New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 2394,
      price: 10190000,
      builder: "Suntec New Chandigarh",
    },
    {
      image: "property-2.jpg",
      title: "2 BHK 1285 SF Luxury Apartment in New Chandigarh",
      location: "Apartment in New Chandigarh",
      bedrooms: 2,
      bathrooms: 2,
      size: 1285,
      price: 9766000,
      builder: "The Lake",
    },
    {
      image: "property-3.png",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },
    {
      image: "property-4.jpg",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },
    {
      image: "property-5.jpeg",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },
    {
      image: "property-6.jpg",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },
    {
      image: "property-7.jpg",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },
    {
      image: "property-8.jpg",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },
    {
      image: "property-9.jpg",
      title: "2 BHK 1150 SF Apartment in New Chandigarh",
      location: "New Chandigarh",
      bedrooms: 3,
      bathrooms: 3,
      size: 1150,
      price: 6555000,
      builder: "Omaxe The Resort",
    },

  ];
  const projects = [
    {
      id: 1,
      name: "Omaxe Boulevard",
      location: "Dwarka, Delhi",
      priceRange: "₹ 1.45 Lac - 1.85 Lac",
      units: "42 Restaurants",
      area: "50.4 acres",
      status: "Land Parcel",
      completionDate: "December 2027",
      image: "project-1.webp", // Replace with actual image URL
      priceStart: "1.45 Lac",
    },
    {
      id: 2,
      name: "Signature Global 37D",
      location: "Sector 37D, Gurugram",
      priceRange: "₹ 1 - 1",
      units: "336",
      area: "5.62 acres",
      status: "Under Construction",
      image: "project-2.jpg",
      priceStart: "1",
    },
    {
      id: 3,
      name: "Oberoi Three Sixty West",
      location: "Worli, Mumbai",
      priceRange: "₹ 45.00 Cr - 57.00 Cr",
      units: "284",
      area: "1.58 acres",
      status: "Ready to move",
      image: "project-3.png",
      priceStart: "45.00 Cr",
    },
  ];
  const testimonials = [
    {
      name: "Naveen Kansal",
      image: "nvin.png",
      review:
        "Ccs is providing best services to their clients. Management always works in staff favour....happy to be a part of ccs team...",
    },
    {
      name: "Priyanka Musafir",
      image: "prinka.png",
      review:
        "Ccs provide the best property to their clients. Since long I was finding a good apartment in Chandigarh so I got it through ccs..",
    },
    {
      name: "Girjesh",
      image: "girsih.png",
      review:
        "Properties are very premium and budget-friendly. The behavior of the staff is very professional and they listen to all queries...",
    },
  ];

  return (<>    <div className="min-h-screen p-10"  >
      <Navbar />
      <div
  className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 bg-[url('background.jpg')] bg-cover bg-center"
>
      {/* <div className="min-h-screen   bg-gray-100 flex flex-col items-center justify-center p-4 ">      */}
     <div className="text-center mb-8 ">
        <h2 className="text-2xl font-semibold text-white">Let us Guide You Home!</h2>
      </div> 

      <div className="width: 412px; opacity: 0; transform: translate3d(-2135px, 0px, 0px); transition-duration: 0ms; margin-right: 15px flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-sky-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">New Project</h2>
              <img src="condo.png" alt="New Project" className="w-10 h-10" />
            </div>
            <div className="bg-sky-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Apartment</h2>
              <img src="apartment.png" alt="Apartment" className="w-10 h-10" />
            </div>
            <div className="bg-sky-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Plots</h2>
              <img src="plot.png" alt="Plots" className="w-10 h-10" />
            </div>
            <div className="bg-sky-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Villas</h2>
              <img src="villa.png" alt="Villas" className="w-10 h-10" />
            </div>
            <div className="bg-sky-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Commercial</h2>
              <img src="condo.png" alt="Commercial" className="w-10 h-10" />
            </div>
            <div className="bg-sky-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Shop</h2>
              <img src="shop.png" alt="Shop" className="w-10 h-10" />
            </div>
            </div>
            </div>


      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-sky-600">3546</h3>
          <p className="text-gray-600">+Happy Customers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-sky-600">4665</h3>
          <p className="text-gray-600">+Properties Sold</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-sky-600">214</h3>
          <p className="text-gray-600">+Projects</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold text-sky-600">118</h3>
          <p className="text-gray-600">+Commercial</p>
        </div>
      </div>
    </div>

    <section >
    <div className="bg-gray-100 min-h-screen p-10 ">
      <div className="text-center">
        <p className="text-sky-600 font-semibold">Find rental properties anywhere</p>
        <h2 className="text-3xl font-bold mt-2">Discover Popular Property</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 sm:items-center md:grid-cols-3 gap-6 justify-center">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
    </section>
        {/* project section  */}
        <section className="bg-gray-100 min-h-screen p-10">
      <div className="container mx-auto px-6">
        <p className=" text-center text-xl font-bold text-gray-800 mb-6">
          Browse some of our <span className="text-sky-600">Recent Projects</span>
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Hover Zoom Effect */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600 text-sm"><FaLocationDot></FaLocationDot> {project.location}</p>
                <div className="mt-4">
                  <p className="text-gray-800 font-medium">{project.priceRange}</p>
                  <p className="text-gray-600 text-sm">Units: {project.units}</p>
                  <p className="text-gray-600 text-sm">Area: {project.area}</p>
                  <p className="text-gray-600 text-sm">{project.status}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">Starts From</p>
                <p className="text-sky-600 font-bold text-lg">{project.priceStart}</p>
                <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg">
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* next section */}
    <section className="bg-sky-600 text-white py-16 px-6 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="city.jpg"
            alt="City Skyline"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-left ml-8">
        <p className="text-left ml-8 text-yellow-400">Who we are and our services</p>
          <h2 className="text-3xl font-bold mb-4 ml-8">Why Choose Us</h2>
          <div className="space-y-4 ml-8">
            <div className="flex items-center gap-4">
              <img src="icon1.png" className="text-2xl "  />
              <div>
                <h3 className="text-xl font-semibold">Personalized Service</h3>
                <p className="text-yellow-400">Helps to provide the best quality of property.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="icon2.png" className="text-2xl" />
              <div>
                <h3 className="text-xl font-semibold">Financing Made Easy</h3>
                <p className="text-yellow-400">Helps to provide loans.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="icon3.png" className="text-2xl" />
              <div>
                <h3 className="text-xl font-semibold">Complete Support</h3>
                <p className="text-yellow-400">Providing complete support.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="icon4.png"className="text-2xl" />
              <div>
                <h3 className="text-xl font-semibold">Trusted by Thousands</h3>
                <p className="text-yellow-400">Customer satisfaction is our top priority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   

    {/* section next  */}
    <section className="relative bg-cover bg-center text-white py-16 bg-opacity-0" style={{ backgroundImage: "url('city.jpg')" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Hear From Our Clients</h2>
        <button className="px-4 py-2 mb-2 border border-white rounded-md hover:bg-white hover:text-black transition">
          More Reviews
        </button>
        <div className="flex justify-center gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white text-black p-6 rounded-lg shadow-lg max-w-sm">
              {/* Profile Image */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-10 text-center">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 italic mt-2">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     {/* section next  */}
     <PropertyGrid></PropertyGrid>

     {/* section next  */}
     <Partners></Partners>

     {/* section next  */}
     <VideoS></VideoS>
      <Footer />
    </div>
  
    </>

  );
};

export default Home;
