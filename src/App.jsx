// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <h1 className="text-3xl font-extralight  underline">
//       Hello world!
//     </h1>
//     </>
//   )
// }

// export default App
import React from "react";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-blue-600">RealEstatePro</h1>
    <ul className="flex space-x-6">
      <li className="cursor-pointer hover:text-blue-600">Home</li>
      <li className="cursor-pointer hover:text-blue-600">Listings</li>
      <li className="cursor-pointer hover:text-blue-600">Contact</li>
    </ul>
  </nav>
);

const Hero = () => (
  <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
       style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?house')" }}>
    <div className="bg-black bg-opacity-50 p-10 rounded-xl">
      <h2 className="text-4xl font-bold">Find Your Dream Home</h2>
      <p className="mt-2 text-lg">Browse the best properties at unbeatable prices</p>
    </div>
  </div>
);

const PropertyCard = ({ title, price, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
    <h3 className="text-xl font-bold mt-3">{title}</h3>
    <p className="text-gray-600">${price}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Details</button>
  </div>
);

const Listings = () => {
  const properties = [
    { id: 1, title: "Luxury Villa", price: "500,000", image: "https://source.unsplash.com/300x200/?villa" },
    { id: 2, title: "Modern Apartment", price: "250,000", image: "https://source.unsplash.com/300x200/?apartment" },
    { id: 3, title: "Cozy House", price: "180,000", image: "https://source.unsplash.com/300x200/?house" }
  ];
  
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center mt-10">
    <p>&copy; 2025 RealEstatePro. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Listings />
    <Footer />
  </div>
);

export default App;

