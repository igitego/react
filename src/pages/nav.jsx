import { Link } from "react-router-dom"

 function Nav() {
    return (
      <div className="fixed w-full bg-blue-600 p-12 flex shadow-lg  z-50 justify-end pt-2">
       <nav className="text-white  mt-6 font-medium space-x-6 "> 
          <Link to="/" className="hover:underline hover:font-bold active:text-blue-800 mt-4">Home</Link>
          <Link to="/service" className="hover:underline hover:font-bold active:text-blue-800">Service</Link>
          <Link to="/parternship" className="hover:underline hover:font-bold active:text-blue-800">Parternship</Link>
          <Link to="/ourdoctor" className="hover:underline hover:font-bold active:text-blue-800">Our doctor</Link>
          <Link to="/contact" className="hover:underline hover:font-bold active:text-blue-800">Contact</Link>
        </nav>
      </div>

    );
}

export default Nav;