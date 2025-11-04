import s1 from "../assets/s1.jpg"

function Service() {
  const serviceCategories = [
    {
      title: "Preventive Activities",
      icon: "🛡️",
      services: [
        "Prenuptial consultation",
        "Prenatal consultation",
        "HIV counseling, diagnostic and prevention",
        "Postnatal consultation",
        "Child growth monitoring 0-5 Year",
        "Medical check up and screening",
        "Natural family planning",
        "Vaccination",
        "Nutrition counseling for malnutrition, obesity, diabetes etc."
      ],
      color: "blue"
    },
    {
      title: "Curative Activities",
      icon: "🏥",
      services: [
        "General medical consultations",
        "Chronic disease management",
        "Acute illness treatment",
        "Minor surgical procedures",
        "Wound care and dressing",
        "Infectious disease treatment",
        "Pain management",
        "Emergency medical care",
        "Referral services"
      ],
      color: "green"
    },
    {
      title: "Promotional Activities",
      icon: "📢",
      services: [
        "Health education programs",
        "Community health workshops",
        "Hygiene and sanitation awareness",
        "Disease prevention campaigns",
        "Healthy lifestyle promotion",
        "Mental health awareness",
        "Nutrition education",
        "Exercise and fitness programs",
        "Smoking cessation support"
      ],
      color: "purple"
    },
    {
      title: "Maternity Unit Activities",
      icon: "👶",
      services: [
        "Antenatal care",
        "Delivery services",
        "Postpartum care",
        "Newborn care",
        "Family planning services",
        "High-risk pregnancy management",
        "Breastfeeding support",
        "Maternal nutrition counseling",
        "Reproductive health services"
      ],
      color: "pink"
    },
    {
      title: "Administrative Activities",
      icon: "📋",
      services: [
        "Patient registration and records",
        "Appointment scheduling",
        "Medical billing and insurance",
        "Health information management",
        "Staff training and development",
        "Facility management",
        "Supply chain management",
        "Quality assurance",
        "Community outreach coordination"
      ],
      color: "orange"
    },
    {
      title: "Specialized Services",
      icon: "⭐",
      services: [
        "Hydrocephalus treatment program",
        "Laboratory services",
        "Pharmacy services",
        "Dental care",
        "Optical services",
        "Physical therapy",
        "Psychological counseling",
        "Social work services",
        "Home-based care"
      ],
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700"
    };
    return colors[color] || colors.blue;
  };

  const getBorderColor = (color) => {
    const colors = {
      blue: "border-l-blue-500",
      green: "border-l-green-500",
      purple: "border-l-purple-500",
      pink: "border-l-pink-500",
      orange: "border-l-orange-500",
      teal: "border-l-teal-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600">Healthcare Services</span>
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          The Gikonko Health Center offers comprehensive healthcare services grouped into different 
          categories to meet all your medical needs. From preventive care to specialized treatments, 
          we are committed to providing quality healthcare for our community.
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={s1} 
            className="w-full h-64 md:h-96 object-cover"
            alt="Gikonko Health Center Services"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Comprehensive Healthcare Solutions</h2>
              <p className="text-lg md:text-xl">Your health is our priority</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-6 border-l-4 ${getBorderColor(category.color)} transform hover:scale-105 transition-transform duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              {/* Services List */}
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex}
                    className={`flex items-start p-3 rounded-lg ${getColorClasses(category.color)}`}
                  >
                    <svg 
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Our dedicated team is ready to provide you with the best healthcare services. 
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300">
              <a href="contact">Book Appointment</a>
            </button>
           
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="contact">Contact Us</a>
            
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-red-700">Emergency Services</h3>
          </div>
          <p className="text-red-600">
            24/7 Emergency Care Available | Call: <span className="font-bold">+250 788 123 456</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;