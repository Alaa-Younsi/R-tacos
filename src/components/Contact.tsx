const Contact = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Phone Numbers */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl shadow-lg border-4 border-red-600">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            📞 Phone Numbers
          </h3>
          <div className="space-y-3">
            <a 
              href="tel:0549415993" 
              className="block text-center text-white text-xl font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 py-3 rounded-lg"
            >
              0549 41 59 93
            </a>
            <a 
              href="tel:0656415993" 
              className="block text-center text-white text-xl font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 py-3 rounded-lg"
            >
              0656 41 59 93
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-xl shadow-lg border-4 border-orange-600">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            ✉️ Email
          </h3>
          <a 
            href="mailto:rtacosbirkhadem2024@gmail.com"
            className="block text-center text-white text-xl font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 py-3 rounded-lg break-all"
          >
            rtacosbirkhadem2024@gmail.com
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-700 text-lg mb-4">We're here to serve you!</p>
          <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
