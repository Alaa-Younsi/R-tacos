const Info = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Information
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Working Hours */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            🕒 Working Hours
          </h3>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-xl shadow-lg border-4 border-red-600">
            <p className="text-white font-semibold text-lg">Saturday - Thursday</p>
            <p className="text-white text-xl font-bold">10:00 AM - 1:00 AM</p>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-xl shadow-lg border-4 border-orange-600">
            <p className="text-white font-semibold text-lg">Friday</p>
            <p className="text-white text-xl font-bold">2:00 PM - 1:00 AM</p>
          </div>
        </div>

        {/* Address and Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            📍 Find Us
          </h3>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg border-4 border-purple-600">
            <p className="text-white font-semibold text-lg mb-2">Address</p>
            <p className="text-white">Birkhadem, Algiers</p>
          </div>
          
          {/* Social Media */}
          <div className="space-y-3">
            <a 
              href="https://www.instagram.com/rtacos_birkhadem?igsh=MTh1NWg5NXBzbHM5cA=="
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-xl shadow-lg border-4 border-pink-600 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <img src="/instagram.jpg" alt="Instagram" className="w-8 h-8 rounded-full" />
                <span className="text-white font-bold text-lg">Instagram</span>
              </div>
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61565803031735&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg border-4 border-blue-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <img src="/facebook.jpg" alt="Facebook" className="w-8 h-8 rounded-full" />
                <span className="text-white font-bold text-lg">Facebook</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
