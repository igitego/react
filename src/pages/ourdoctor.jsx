import doct1 from "../assets/doct1.png"
import doct2 from "../assets/doct2.png"
import doct3 from "../assets/doct3.png"

function Ourdoctor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-blue-600">Medical Team</span>
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          As a patient in our Health Center, you can rely on being cared for by a professional 
          and friendly staff. With over 50 employees in various fields, we have a broadly based 
          team that does its best to take care of our patients day after day.
        </p>
      </div>

      {/* Doctor 1 Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src={doct1} 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                alt="Medical Specialist"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Clinical Specialists</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Nutritionist A0</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A healthcare professional who advises on diet, nutrition, and healthy eating 
                    habits to improve overall health or manage specific medical conditions. 
                    Our A0 qualified nutritionist provides expert dietary guidance.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Clinic Officer Anaesthesia A0</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A clinical professional trained to assist with anesthesia during surgeries 
                    or minor procedures. They monitor patients, administer medications, and 
                    support anesthesiologists to ensure safe surgical experiences.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Midwives A1</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our A1 qualified midwives provide comprehensive maternal and newborn care, 
                    supporting mothers through pregnancy, childbirth, and postpartum periods 
                    with expertise and compassion.
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

      {/* Doctor 2 Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src={doct2} 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                alt="Nursing Team"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nursing Team</h2>
              
              <div className="space-y-6">
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Registered Nurses</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our nursing team consists of healthcare professionals who provide comprehensive 
                    care to patients in hospitals, clinics, and communities. They are trained to 
                    support doctors, monitor patient health, administer medications, and educate 
                    patients about healthy lifestyles and disease prevention.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-teal-700">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Patient Monitoring
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Medication Administration
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Health Education
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Emergency Care
                    </div>
                  </div>
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

      {/* Doctor 3 Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src={doct3} 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                alt="Support Staff"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Support Staff & Administration</h2>
              
              <div className="space-y-6">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">Laboratory Technicians (A2)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our A2 qualified laboratory technicians are trained health professionals who 
                    perform diagnostic tests on blood, urine, tissue, and other samples to help 
                    doctors diagnose diseases and monitor patient health with precision and accuracy.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Social Assistant</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our social assistants support patients and their families by addressing 
                    social, emotional, and financial challenges related to healthcare, ensuring 
                    comprehensive patient support beyond medical treatment.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">CEO, Community Health</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Chief Executive Officer in our community health setting is the top 
                    administrator responsible for managing the health organization, strategic 
                    planning, and ensuring the delivery of high-quality healthcare services 
                    to our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Team in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Patient Care</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Medical Specialties</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Dedicated Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourdoctor;