const data = {
     phone: "+250 788 123 456",
     email: "info@gikonkohealthcenter.com",
     address: "Gisagara, Rwanda - GG 123 Street",
     hours: "Mon - Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 2:00 PM",
}

function Contact(){
    return (
       <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center p-32">
           <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
           <p className="text-gray-600 text-center mb-10 max-w-lg">       
              We're here to help! Reach out to us for appointments, questions, or any
              information about our health services.
           </p>

           <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
               <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <span className="font-semibold text-blue-600">Phone:</span> {data.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-600">Email:</span>{" "}
                    <a href={`mailto:${data.email}`} className="hover:underline">
                        {data.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-blue-600">Address</span> {data.address}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-600">Working Hours</span> {" "}
                    {data.hours}
                  </p>
               </div>

               <form className="mt-8 space-y-4">
                 <input 
                   type="text"
                   placeholder="Enter name"
                   className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 /> 
                 <input 
                   type="email"
                   placeholder="Enter email"
                   className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 /> 
                 <textarea 
                   type="text"
                   placeholder="Enter message"
                   className="w-full border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
                 <button className="w-full bg-blue-300 py-4 rounded-lg text-white font-bold hover:bg-blue-400 transition duration-200">Submit</button>
               </form>
           </div>
       </div>
    );
}
export default Contact;