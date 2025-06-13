// "use client";

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: "Home", path: "/" },
//     { name: "Events", path: "/events" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "History", path: "/history" },
//     { name: "FAQ", path: "/faq" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center mr-8">
//             <img
//               src="logo192.png"
//               alt="Mind Hack Logo"
//               className="h-10 w-10 rounded-full mr-3"
//             />
//             <span className="text-2xl font-bold text-gray-900">Mind Hack</span>
//           </Link>

//           {/* Desktop Navigation - beside logo */}
//           <nav className="hidden md:flex space-x-8 flex-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
//                   location.pathname === item.path
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : ""
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 ml-auto"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4">
//             <nav className="flex flex-col space-y-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
//                     location.pathname === item.path
//                       ? "text-blue-600 bg-blue-50"
//                       : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "History", path: "/history" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Register", path: "/register" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-8">
            <img
              src="logo192.png"
              alt="Mind Hack Logo"
              className="h-10 w-10 rounded-full mr-3 hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              Mind Hack
            </span>
          </Link>

          {/* Desktop Navigation - beside logo */}
          <nav className="hidden md:flex space-x-8 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path ? "text-blue-600" : ""
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                    location.pathname === item.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button with animation */}
          <button
            className="md:hidden p-2 ml-auto relative overflow-hidden rounded-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              {/* Hamburger Icon */}
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <nav className="flex flex-col space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-gray-700 hover:text-blue-600 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 transform ${
                  location.pathname === item.path
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : ""
                } ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="ml-auto">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    </span>
                  )}
                </span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm md:hidden -z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-10px);
            opacity: 0;
          }
        }

        @keyframes fadeInStagger {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }

        .animate-fade-in-stagger {
          animation: fadeInStagger 0.4s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
