import logo3 from "../assets/logo3.jpg"
import  logo2 from "../assets/logo2.png"
import logo1 from "../assets/logo1.png"
function Parternship(){

return(
   <div className="bg-blue-200 min-h-screen">
            <div className="pt-30 w-[800px] ms-[500px]">
                <h1 className=" text-center text-[30px] text-gray-500 font-bold underline mb-3">Our Team</h1>
                <p className="ms-4">
                    The Gikonko Health Center in Rwanda has several key partnerships, 
                    primarily with the Catholic Church's Institut Saint Boniface, 
                    the German and UK-based organization FHN, 
                    and the medical device company CHRISTOPH MIETHKE GmbH & Co. KG
                </p>
            </div>
           <div className="flex justify-between ms-40 mt-14">
            <div className="w-[500px] shadow-2xl">
                <img src={logo3} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold">Institut Saint Boniface </p>
                    <p className="font-light">
                       Founder and operator: 
                       The Catholic health center was founded in 1974 by the Institut Saint Boniface, 
                       a congregation of sisters that continues to lead and manage its operations.
                    </p>
                </div>
               <div className="mt-4">
                     <p className="text-2xl text-gray-600 mb-3 font-bold">Spiritual and human development</p>
                     <p className="font-light">
                          Spiritual and human development: 
                          Beyond providing medical care, the Institut works with the center's staff to meet the health, 
                          economic, 
                          and intellectual development needs of the local population.
                          
                     </p>
               </div>
               <div>
                <p className="text-2xl text-gray-600 font-bold mt-3"> </p>
                <p className="mt-3 font-light">
                        Specialized treatment: Sister Uta Elisabeth Düll, a physician with the Institut,
                         serves as the center's chief medical doctor. 
                        She oversees specialized, low-cost treatment for hydrocephalus,
                         a medical condition common in children.  </p>
               </div>
            </div>
           </div>   
           <hr className="mt-6"/>
           
        <div className="flex justify-between ms-40 mt-24">
            <div className="w-[500px] shadow-2xl">
                <img src={logo2} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold mt-[100px]"> CHRISTOPH MIETHKE GmbH & Co. KG</p>
                    <p className="font-light">
                   Hydrocephalus treatment: This German medical device company 
                   is a long-standing supporter of the Gikonko Health Center's 
                   specialized hydrocephalus treatment program.
                   Product donation: The company generously donates the hydrocephalus valves (shunts)
                   used for the more than 1,000 surgeries performed at the center over a 21-year period. 
                    </p>
                </div>
            </div>
           </div>
           
           <hr className="mt-6" />

            <div className="flex justify-between ms-40 mt-14">
            <div className="w-[500px] shadow-2xl">
                <img src={logo1} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold">FHN (Germany and UK) </p>
                    <p className="font-light">
                      International support: FHN is an international non-profit organization that has been 
                      a supporter of the Gikonko Health Center since 2019.
                    </p>
                </div>
               <div className="mt-4">
                     <p className="text-2xl text-gray-600 mb-3 font-bold">Donations and initiatives:</p>
                     <p className="font-light">
                        Donations and initiatives: FHN provides donations to ensure the center's sustainable operation,
                        including financing medical equipment and providing food aid during the COVID-19 pandemic. 
                     </p>
               </div>
               <div>
                <p className="text-2xl text-gray-600 font-bold mt-3"></p>
                <p className="mt-3 font-light">

                </p>
               </div>
            </div>
           </div>   
        </div>
    );
}
export default Parternship;