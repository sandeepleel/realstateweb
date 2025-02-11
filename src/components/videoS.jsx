import React from "react";

const videos = [
  {
    id: 1,
    title: "3BHK READY TO MOVE FLAT FOR SALE IN ZIRAKPUR",
    image: "video1.jpeg",
    link: "https://ccsrealestates.com/videos/luxury-flats-in-airport-road-mohali-dlf",
  },
  {
    id: 2,
    title: "Luxury Flats in Airport Road Mohali",
    image: "video2.jpeg",
    link: "https://ccsrealestates.com/videos/luxury-flats-in-airport-road-mohali-dlf",
  },
];

const VideoS = () => {
  return (
    <section className="py-7 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-lg text-sky-500">Browse popular Videos</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Videos</h2>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4 px-2 md:px-0">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full p-3 text-center">
                {video.title}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://ccsrealestates.com/videos"
          className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition duration-300"
        >
          Browse More
        </a>
      </div>
    </section>
  );
};

export default VideoS;
