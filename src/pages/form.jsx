import { use, useState } from "react";

function Register(){
    const [name,setName] = useState("");
    return(
        <div className="mt-30 bg-blue-500">
            <fieldset>
                <legend>Register Form</legend>
                 <label >FirstName</label>
                 <input type="text"placeholder="firstname"/>
                  <label >LastName</label>
                 <input type="text"placeholder="lastname" />
                  <label >Email</label>
                 <input type="text"placeholder="email" />
                  <label >Address</label>
                 <input type="text"placeholder="address" />
                 </fieldset>
        </div>
    )
}
export default Register;