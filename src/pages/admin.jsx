    import { use, useState } from "react";
function Signup(){

        const [name,setName] = useState("");
    return(
        <div className="bg-white w-[20%] ms-[40%] mt-[200px] rounded-xl shadow-2xl">
              <div className="p-2">
                 <label className="text-[15px] block">FirstName:</label>
                 <input type="text"placeholder="firstname" className="bg-gray-600 w-full p-2 rounded-lg text-white placeholder:text-white"/>
              </div>
              <div>
                  <label className="text-[15px] block">LastName:</label>
                 <input type="text"placeholder="lastname" className="bg-gray-600 w-full p-2 rounded-lg text-white placeholder:text-white"/>
                 </div>
                 <div>
                  <label className="text-[15px] block">Email:</label>
                 <input type="text"placeholder="email"className="bg-gray-600 w-full p-2 rounded-lg text-white placeholder:text-white" />
                 </div>
                 <div>
                  <label className="text-[15px] block">Address:</label>
                 <input type="text"placeholder="address"className="bg-gray-600 w-full p-2 rounded-lg text-white placeholder:text-white" />
                 </div>
                 <div className="flex justify-between p-3">
                    <button className="bg-blue-300 px-3 py-1 rounded-lg text-white hover:bg-blue-400 transition duration-200">submit</button>
                    </div>
                    
                    <button  className="bg-blue-300 px-3 py-1 ms-3 rounded-lg text-white hover:bg-blue-400 transition duration-200">cancel</button>
                
                 
           
  
        </div>
    );
}
export default Signup;