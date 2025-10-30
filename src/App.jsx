import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import  Nav  from "./pages/nav";
 import Contact from "./pages/contact";
 import Signup from "./pages/admin";
 import Service from "./pages/service";
 import Ourdoctor from "./pages/ourdoctor";
import Parternship from "./pages/parternship";

function App() {
  return (
    
    <div className="">
    <BrowserRouter>
      <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Service" element={<Service />}/>
            <Route path="/Parternship" element={<Parternship />}/>
            <Route path="/Ourdoctor" element={<Ourdoctor/>}/>
        </Routes>
    </BrowserRouter>
    </div>  
  );
}
export default App
