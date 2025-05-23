const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
  ];
  
  const Gallery = () => {
    return (
      <div id="gallery" className="px-4 py-10 max-w-7xl mx-auto">
        <h2 className="text-blue-600 font-semibold text-sm text-center uppercase mb-2">Pictures</h2>
        <h1 className="text-3xl font-bold text-center mb-8">View Gallery</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl border-4 border-orange-400 shadow-md">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  