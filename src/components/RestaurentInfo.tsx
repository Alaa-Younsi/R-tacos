const RestaurentInfo = () => {
  return (
    <div className="bg-gradient-to-br from-pink-400 via-red-500 to-orange-500 border-4 border-yellow-500 w-[30%] h-1/4 absolute top-[70%] left-[1%] hidden md:block rounded-xl shadow-2xl shadow-yellow-500/50 overflow-hidden group">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-yellow-300 z-10"></div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-yellow-300 z-10"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-yellow-300 z-10"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-yellow-300 z-10"></div>
      
      <img 
        src="/image6.jpg" 
        alt="Restaurant Interior" 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default RestaurentInfo;
