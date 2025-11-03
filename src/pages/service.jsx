import s1 from "../assets/s1.jpg"


function Service(){


return(
       <div div className="bg-blue-200 min-h-screen">
         <div className="pt-30 w-[800px] ms-[500px]">
        
            <h1 className=" text-center text-[30px] text-gray-500 font-bold underline mb-3 " > SERVICES:</h1>
           <p className="ms-0">
            The HC Gikonko is offering different kinds of services,
             which you can group in different categories: preventive activities,
              curative activities, promotional activities,
             activities of the maternity unit and administration activities.
         </p>
         <div  className="w-[600px] me-[400px] mt-4">
             <p className="text-2xl text-gray-600 mb-3 font-bold"> Preventive activities</p>
             <p lassName="font-light">
               1. Prenuptial consultation <br />
               2.Prenatal consultation <br />
               3.HIV counseling, diagnostic and prevention <br />
               4.Postnatal consultation <br />
               5.Child growth monitoring 0-5 Year <br />
               6.Medical check up and screening <br />
               7.Natural family planning <br />
               8.Vaccination <br />
               9.Nutrition counseling for malnutrition, obesity, diabetes etc.
             </p>
             </div>
            </div>
           <div className="flex justify-between ms-40 mt-14">
            <div className="w-[600px] shadow-2xl">
             <img src={s1} className="rounded-2xl w-[600px]" />
            </div>
           </div>

 
            
    
               
            
    

            
           
       </div>
    );
}
export default Service;