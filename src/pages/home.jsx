import { Link } from "react-router-dom";
import background from "../assets/background.jpg"
function Home(){
    return(
        <div className="min-h-screen flex">
            <div className="w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${background})`}}
            ></div> 

            <div
               className="w-1/2 flex flex-col justify-center items-start p-16 bg-blue-200"
            >
                <div className="bg-white p-6 rounded-xl shadow-2xl">
                     <h1 className="text-4xl text-center font-bold mb-6 text-blue-600 underline">Welcome to Gikonko Health Center</h1>
                     <p className="font-light"> we are dedicated to providing top-quality healthcare for you and your family. Our team of experienced doctors 
                        and specialists work tirelessly to ensure your well-being, offering personalized care and modern medical solutions. 
                        Whether it's preventive care, treatment, or guidance for a healthier lifestyle, we are here to support you every step of the way.</p>

                        <div className="mt-8">
                            <Link to="/contact" className="bg-blue-300 px-7 py-3 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-200">Contact Us</Link>
                        </div>
                </div>
              
            </div>
        </div>
    );
}
export default Home;

// for width you can use maw-w-md, lg,sm ,2xl, xl or w-auto, w-10