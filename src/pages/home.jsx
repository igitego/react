import { Link } from "react-router-dom";
import background from "../assets/background.jpg"

function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Background Image Section */}
      <div 
        className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 lg:bg-opacity-0"></div>
        
        {/* Mobile-only content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-6 lg:hidden">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome to Gikonko Health Center</h1>
          <p className="text-center text-lg">Your Health, Our Priority</p>
        </div>
      </div> 

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl max-w-2xl w-full border-l-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-blue-600">Gikonko Health Center</span>
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              We are dedicated to providing top-quality healthcare for you and your family. 
              Our team of experienced doctors and specialists work tirelessly to ensure your 
              well-being, offering personalized care and modern medical solutions.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Whether it's preventive care, treatment, or guidance for a healthier lifestyle, 
              we are here to support you every step of the way with compassion and expertise.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Quality Care</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Expert Team</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Modern Facilities</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-blue-500 text-blue-600 px-8 py-4 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                Our Services
              </Link>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700 font-semibold">
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                For emergencies, call: <span className="text-lg">+250 788 123 456</span>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl w-full">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">50+</div>
            <div className="text-gray-600">Healthcare Professionals</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Services</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-gray-600">Patient Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;