import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
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
        {/* <div className="text-2xl p-4 font-bold text-sky-600"></div> */}
        <div className="flex items-center">
  <img src="logo.png" alt="CCS Real Estate Pvt. Ltd." className="h-10 md:h-12 object-contain" />
</div>

        <ul className="flex space-x-6 text-black font-medium">
          <li id="Home"  className="hover:text-sky-600 cursor-pointer">Home</li>
          <li id="Property" className="hover:text-sky-600 cursor-pointer">Property</li>
          <li id="About" className="hover:text-sky-600 cursor-pointer">About Us</li>
          <li id="Contact" className="hover:text-sky-600 cursor-pointer">Contact Us</li>
          <li id="Media" className="hover:text-sky-600 cursor-pointer">Media</li>
          <li id="Blog" className="hover:text-sky-600 cursor-pointer">Blog</li>
          <li id="Career" className="hover:text-sky-600 cursor-pointer">Career</li>
        </ul>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          💬 Get Quote
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
