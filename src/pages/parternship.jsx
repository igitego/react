import logo3 from "../assets/logo3.jpg";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";

function Partnership() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600">Partnerships</span>
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          The Gikonko Health Center in Rwanda has established strong partnerships with 
          international organizations and institutions that share our commitment to 
          providing quality healthcare and sustainable community development.
        </p>
      </div>

      {/* Partnership 1 - Institut Saint Boniface */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src={logo3} 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                alt="Institut Saint Boniface"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Institut Saint Boniface</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Founder and Operator</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Catholic health center was founded in 1974 by the Institut Saint Boniface, 
                    a congregation of sisters that continues to lead and manage its operations with 
                    dedication and compassion.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Holistic Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond providing medical care, the Institut works with the center's staff to meet 
                    the comprehensive health, economic, and intellectual development needs of the local population.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Specialized Medical Leadership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sister Uta Elisabeth Düll, a physician with the Institut, serves as the center's chief medical 
                    doctor, overseeing specialized, low-cost treatment for hydrocephalus in children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="border-t border-gray-300"></div>
      </div>

      {/* Partnership 2 - CHRISTOPH MIETHKE */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src={logo2} 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                alt="CHRISTOPH MIETHKE"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">CHRISTOPH MIETHKE GmbH & Co. KG</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Hydrocephalus Treatment Partnership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This German medical device company is a long-standing supporter of our specialized 
                    hydrocephalus treatment program, bringing hope to countless children and families.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Life-Saving Donations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The company generously donates hydrocephalus valves (shunts) used in more than 
                    1,000 surgeries performed at our center over the past 21 years.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold text-center">
                    "Transforming lives through medical innovation and compassionate support"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="border-t border-gray-300"></div>
      </div>

      {/* Partnership 3 - FHN */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src={logo1} 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                alt="FHN Organization"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">FHN (Germany and UK)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">International Support Network</h3>
                  <p className="text-gray-600 leading-relaxed">
                    FHN is an international non-profit organization that has been a dedicated 
                    supporter of the Gikonko Health Center since 2019, bridging continents for healthcare.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Sustainable Development Initiatives</h3>
                  <p className="text-gray-600 leading-relaxed">
                    FHN provides crucial donations to ensure our center's sustainable operation, 
                    including financing medical equipment and providing essential food aid during 
                    the COVID-19 pandemic.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">Community Resilience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through their ongoing support, FHN helps us build resilient communities by 
                    addressing both immediate healthcare needs and long-term development goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Interested in partnering with us to make a difference in healthcare?
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
           <a href="ourdoctor"> Get in Touch</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partnership;