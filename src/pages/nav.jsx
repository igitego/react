import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-white text-xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-white p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span>Gikonko Health Center</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { path: "/", label: "Home" },
              { path: "/service", label: "Services" },
              { path: "/parternship", label: "Partnership" },
              { path: "/ourdoctor", label: "Our Team" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActiveLink(item.path)
                    ? "text-white bg-blue-800 shadow-inner"
                    : "text-blue-100 hover:text-white hover:bg-blue-500"
                }`}
              >
                {item.label}
                {isActiveLink(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-blue-100 hover:text-white p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              onClick={() => {
                // Add mobile menu toggle logic here
                console.log("Mobile menu clicked");
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Hidden by default) */}
        <div className="md:hidden hidden bg-blue-700 rounded-lg mt-2 p-4">
          <div className="flex flex-col space-y-2">
            {[
              { path: "/", label: "Home" },
              { path: "/service", label: "Services" },
              { path: "/parternship", label: "Partnership" },
              { path: "/ourdoctor", label: "Our Team" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActiveLink(item.path)
                    ? "text-white bg-blue-800"
                    : "text-blue-100 hover:text-white hover:bg-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-1 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <span className="font-semibold">Emergency:</span> Call +250 788 123 456 | 24/7 Services Available
        </div>
      </div>
    </div>
  );
}

export default Nav;