import doct1 from "../assets/doct1.png"
import doct2 from "../assets/doct2.png"
import doct3 from "../assets/doct3.png"
function Ourdoctor(){

return(
        <div className="bg-blue-200 min-h-screen">
            <div className="pt-30 w-[800px] ms-[500px]">
                <h1 className=" text-center text-[30px] text-gray-500 font-bold underline mb-3">Our Team</h1>
                <p className="ms-4">As a patient in our Health Center you can rely on being cared for by a professional and friendly staff. With over 50 employees in various fields, we have a broadly based team that does its best to take care of our patients day after day</p>
            </div>
           <div className="flex justify-between ms-40 mt-14">
            <div className="w-[500px] shadow-2xl">
                <img src={doct1} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold">1 nutritionist A0 </p>
                    <p className="font-light">
                       Nutritionist: A healthcare professional who advises on diet, nutrition, and healthy eating habits to improve overall health or manage specific medical conditions.
                       A0: Likely refers to the qualification or level of the professional
                    </p>
                </div>
               <div className="mt-4">
                     <p className="text-2xl text-gray-600 mb-3 font-bold">2 Clinic officer anaesthesia A0</p>
                     <p className="font-light">
                        Clinic Officer (Anaesthesia): A clinical professional trained to assist with anesthesia during surgeries or minor procedures. They monitor patients, administer medications, and support anesthesiologists.
                     </p>
               </div>
               <div>
                <p className="text-2xl text-gray-600 font-bold mt-3">3 and 4  are midwives A1</p>
                <p className="mt-3 font-light">
                        The CEO (Chief Executive Officer) in a community health setting is the top administrator responsible for managing the health organization or clinic.                </p>
               </div>
            </div>
           </div>   
           <hr className="mt-6"/>
           
        <div className="flex justify-between ms-40 mt-24">
            <div className="w-[500px] shadow-2xl">
                <img src={doct2} className="rounded-2xl" />
            </div>
            <div className="w-[900px] me-[200px] mt-4">
                <div className="">
                    <p className="text-2xl text-gray-600 mb-3 font-bold mt-[100px]">Nurse </p>
                    <p className="font-light">
                      Nurses: are healthcare professionals who provide care to patients in hospitals, clinics, and communities. They are trained to support doctors, monitor patient health, administer medications, and educate patients about healthy lifestyles and disease prevention.
                    </p>
                </div>
            </div>
           </div>
           
           <hr className="mt-6" />

            <div className="flex justify-between ms-40 mt-14">
            <div className="w-[500px] shadow-2xl">
                <img src={doct3} className="rounded-2xl" />
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
export default Ourdoctor;