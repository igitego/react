import pat1 from "../assets/pat1.jpeg"
import  pat2 from "../assets/pat2.jpeg"
import pat3 from "../assets/pat3.jpeg"
function Parternship(){

return(
   <div className="bg-blue-200 min-h-screen">
            <div className="pt-30 w-[800px] ms-[500px]">
                <h1 className=" text-center text-[30px] text-gray-500 font-bold underline mb-3">Our Team</h1>
                <p className="ms-4">As a patient in our Health Center you can rely on being cared for by 
                    a professional and friendly staff. 
                    With over 50 employees in various fields, 
                    we have a broadly based team that does its best to take care of our patients day after day</p>
            </div>
           <div className="flex justify-between ms-40 mt-14">
            <div className="w-[500px] shadow-2xl">
                <img src={pat1} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold">Institut Saint Bonifatius </p>
                    <p className="font-light">
                       The Gikonko Health Center's main partnership is with the Institut Saint Bonifatius,
                        the Catholic institution that founded and has operated the center since 1974. 
                        The center also receives funding and support from other organizations, 
                       particularly for its specialization in treating hydrocephalus. 
                    </p>
                </div>
               <div className="mt-4">
                     <p className="text-2xl text-gray-600 mb-3 font-bold">National Health Care System</p>
                     <p className="font-light">
                          While privately run, the center is integrated into the national health care system. 
                          It operates under the supervision of the Gakoma District Hospital.
                     </p>
               </div>
               <div>
                <p className="text-2xl text-gray-600 font-bold mt-3"> </p>
                <p className="mt-3 font-light">
                        The CEO (Chief Executive Officer) in a community health setting is the top administrator responsible for managing the health organization or clinic.                </p>
               </div>
            </div>
           </div>   
           <hr className="mt-6"/>
           
        <div className="flex justify-between ms-40 mt-24">
            <div className="w-[500px] shadow-2xl">
                <img src={pat2} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold mt-[100px]"> General donors:</p>
                    <p className="font-light">
                      General donors:The center receives numerous donations
                       that help fund community support initiatives,
                       such as providing school supplies, clothing, and housing for poor families. 
                    </p>
                </div>
            </div>
           </div>
           
           <hr className="mt-6" />

            <div className="flex justify-between ms-40 mt-14">
            <div className="w-[500px] shadow-2xl">
                <img src={pat3} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold">1. Laboratory Technicians (A2) </p>
                    <p className="font-light">
               Laboratory technicians are trained health professionals who perform diagnostic tests on blood, urine, tissue, and other samples to help doctors diagnose diseases and monitor patient health.
                    </p>
                </div>
               <div className="mt-4">
                     <p className="text-2xl text-gray-600 mb-3 font-bold">2. Social Assistant</p>
                     <p className="font-light">
                          A social assistant (or social worker) supports patients and their families by addressing social, emotional, and financial challenges related to healthcare.
                     </p>
               </div>
               <div>
                <p className="text-2xl text-gray-600 font-bold mt-3">3. CEO, Community Health</p>
                <p className="mt-3 font-light">

                </p>
               </div>
            </div>
           </div>   
        </div>
    );
}
export default Parternship;