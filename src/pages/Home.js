// "use client";

// import { useState, useEffect, useRef } from "react";
// import { FaEnvelope } from "react-icons/fa";

// const Home = () => {
//   const [email, setEmail] = useState("");
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const [scrollY, setScrollY] = useState(0);
//   const heroSectionRef = useRef(null);
//   const aboutSectionRef = useRef(null);

//   const backgroundImages = [
//     "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
//     "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
//     "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop",
//     "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
//   ];

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     alert("Thank you for subscribing!");
//     setEmail("");
//   };

//   const sponsors = [
//     "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1553484771-371a605b060b?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=150&h=80&fit=crop",
//     "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=150&h=80&fit=crop",
//   ];

//   // Background slideshow effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prevIndex) =>
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   // Scroll-based background movement
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float-slow"></div>
//         <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-float-medium"></div>
//         <div className="absolute top-60 left-1/4 w-3 h-3 bg-blue-300/30 rounded-full animate-float-fast"></div>
//         <div className="absolute top-80 right-1/3 w-5 h-5 bg-purple-300/25 rounded-full animate-float-slow"></div>
//         <div className="absolute bottom-40 left-20 w-4 h-4 bg-blue-500/20 rounded-full animate-float-medium"></div>
//         <div className="absolute bottom-60 right-10 w-6 h-6 bg-purple-500/20 rounded-full animate-float-fast"></div>

//         {/* Geometric shapes */}
//         <div className="absolute top-32 right-1/4 w-8 h-8 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
//         <div className="absolute bottom-32 left-1/3 w-6 h-6 border border-purple-400/20 rotate-45 animate-spin-reverse"></div>
//       </div>

//       {/* Hero Section with sliding background and scroll-based movement */}
//       <section
//         ref={heroSectionRef}
//         className="relative h-screen min-h-[600px] bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center overflow-hidden"
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           {backgroundImages.map((img, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//                 index === currentBgIndex ? "opacity-30" : "opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url(${img})`,
//                 transform: `translateY(${scrollY * 0.3}px)`,
//                 transition: "opacity 1s ease-in-out, transform 0.3s ease-out",
//               }}
//             />
//           ))}
//         </div>

//         {/* Transparent overlay with animation */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-blue-800/40 animate-pulse-slow"></div>

//         <div
//           className="relative z-10 text-center text-white px-4"
//           style={{
//             transform: `translateY(${scrollY * 0.1}px)`,
//             transition: "transform 0.3s ease-out",
//           }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
//             Mind Hack 2025
//           </h1>
//           <p className="text-2xl md:text-3xl mb-8">Unleash Your Potential</p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
//             Register Now
//           </button>
//         </div>
//       </section>

//       {/* Enhanced About Section with Bot GIF */}
//       <section
//         ref={aboutSectionRef}
//         className="py-32 bg-white relative overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop)",
//             backgroundAttachment: "fixed",
//             transform: `translateY(${-scrollY * 0.2}px)`,
//             transition: "transform 0.3s ease-out",
//           }}
//         ></div>

//         {/* Transparent animated overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 animate-gradient-shift"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               What is <span className="text-blue-600">Mind Hack</span>?
//             </h2>
//             <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto hidden md:block">
//               A revolutionary event combining neuroscience, technology, and
//               personal development to unlock your brain's full potential.
//             </p>

//             {/* Bot GIF - Centered and well-designed */}
//             <div className="flex justify-center mt-12 mb-16">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl scale-110"></div>
//                 <div className="relative  ">
//                   <img
//                     src="./bot.gif"
//                     alt="AI Bot Assistant"
//                     className="w-48 h-48 md:w-56 md:h-56 object-contain mx-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-16">
//             {/* First card - Left image, Right text */}
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <div className="md:w-1/2">
//                 <img
//                   src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
//                   alt="Cognitive Enhancement"
//                   className="w-full h-64 object-cover rounded-xl shadow-lg"
//                 />
//               </div>
//               <div className="md:w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
//                     1
//                   </span>
//                   Cognitive Enhancement
//                 </h3>
//                 <p className="text-gray-600">
//                   Learn cutting-edge techniques to improve memory, focus, and
//                   learning speed from world-class neuroscientists.
//                 </p>
//               </div>
//             </div>

//             {/* Second card - Right image, Left text */}
//             <div className="flex flex-col md:flex-row-reverse items-center gap-8">
//               <div className="md:w-1/2">
//                 <img
//                   src="./chatBot.gif"
//                   alt="AI Bot Assistant"
//                   className="w-48 h-48 md:w-56 md:h-56 object-contain mx-auto"
//                 />
//               </div>
//               <div className="md:w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
//                     2
//                   </span>
//                   Technology Integration
//                 </h3>
//                 <p className="text-gray-600">
//                   Experience the latest brain-computer interfaces and
//                   neurotechnology that's revolutionizing human potential.
//                 </p>
//               </div>
//             </div>

//             {/* Third card - Left image, Right text */}
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <div className="md:w-1/2">
//                 <img
//                   src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
//                   alt="Peak Performance"
//                   className="w-full h-64 object-cover rounded-xl shadow-lg"
//                 />
//               </div>
//               <div className="md:w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
//                     3
//                   </span>
//                   Peak Performance
//                 </h3>
//                 <p className="text-gray-600">
//                   Master the mental frameworks used by elite athletes, CEOs, and
//                   artists to achieve extraordinary results.
//                 </p>
//               </div>
//             </div>

//             {/* Fourth card - Right image, Left text */}
//             <div className="flex flex-col md:flex-row-reverse items-center gap-8">
//               <div className="md:w-1/2">
//                 <img
//                   src="./robot.gif"
//                   alt="Community Building"
//                   className="w-full  h-70 object-cover rounded-xl shadow-lg"
//                 />
//               </div>
//               <div className="md:w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
//                     4
//                   </span>
//                   Community Building
//                 </h3>
//                 <p className="text-gray-600">
//                   Connect with like-minded individuals passionate about pushing
//                   the boundaries of human cognition and achievement.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center backdrop-blur-sm">
//               <div className="text-4xl font-bold mb-2">50+</div>
//               <div className="text-lg">Speakers</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-xl text-center backdrop-blur-sm">
//               <div className="text-4xl font-bold mb-2">100+</div>
//               <div className="text-lg">Workshops</div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center backdrop-blur-sm">
//               <div className="text-4xl font-bold mb-2">5K+</div>
//               <div className="text-lg">Attendees</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center backdrop-blur-sm">
//               <div className="text-4xl font-bold mb-2">24</div>
//               <div className="text-lg">Hours</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sponsors Section */}
//       <section className="py-20 bg-gray-50 relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop)",
//             backgroundAttachment: "fixed",
//             transform: `translateY(${-scrollY * 0.1}px)`,
//             transition: "transform 0.3s ease-out",
//           }}
//         ></div>

//         {/* Transparent overlay */}
//         <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Our Partners
//             </h2>
//             <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Leading organizations supporting the future of cognitive
//               enhancement
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {sponsors.map((sponsor, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 border border-gray-100"
//               >
//                 <img
//                   src={sponsor || "/placeholder.svg"}
//                   alt={`Sponsor ${index + 1}`}
//                   className="max-h-16 w-auto object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-24 bg-blue-600 relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=800&fit=crop)",
//             backgroundAttachment: "fixed",
//             transform: `translateY(${-scrollY * 0.1}px)`,
//             transition: "transform 0.3s ease-out",
//           }}
//         ></div>

//         {/* Animated transparent overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 via-purple-600/40 to-blue-700/60 animate-gradient-x"></div>

//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Join the Cognitive Revolution
//           </h2>
//           <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//             Subscribe to get exclusive updates, early access, and special offers
//             for Mind Hack 2025.
//           </p>

//           <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="flex-1 relative">
//                 <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address..."
//                   className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md backdrop-blur-sm"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes float-slow {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }

//         @keyframes float-medium {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(90deg);
//           }
//         }

//         @keyframes float-fast {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(270deg);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }

//         @keyframes gradient-shift {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes gradient-x {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .animate-float-slow {
//           animation: float-slow 6s ease-in-out infinite;
//         }

//         .animate-float-medium {
//           animation: float-medium 4s ease-in-out infinite;
//         }

//         .animate-float-fast {
//           animation: float-fast 3s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         .animate-spin-reverse {
//           animation: spin-reverse 6s linear infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-gradient-shift {
//           animation: gradient-shift 8s ease infinite;
//           background-size: 200% 200%;
//         }

//         .animate-gradient-x {
//           animation: gradient-x 6s ease infinite;
//           background-size: 200% 200%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;
"use client";

import { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaBrain, FaRocket, FaUsers, FaCog } from "react-icons/fa";

const Home = () => {
  const [email, setEmail] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  const sponsors = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=150&h=80&fit=crop",
    "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=150&h=80&fit=crop",
  ];

  // Background slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-based background movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-float-medium"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-blue-300/30 rounded-full animate-float-fast"></div>
        <div className="absolute top-80 right-1/3 w-5 h-5 bg-purple-300/25 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-blue-500/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-60 right-10 w-6 h-6 bg-purple-500/20 rounded-full animate-float-fast"></div>

        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-8 h-8 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 border border-purple-400/20 rotate-45 animate-spin-reverse"></div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="relative h-screen min-h-[700px] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
                index === currentBgIndex ? "opacity-20" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translateY(${scrollY * 0.3}px)`,
                transition: "opacity 2s ease-in-out, transform 0.3s ease-out",
              }}
            />
          ))}
        </div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-600/40 to-indigo-700/50"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Mind Hack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Unleash Your Potential Through Revolutionary Neuroscience &
            Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* What is Mind Hack Section */}
      <section
        ref={aboutSectionRef}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop)",
            backgroundAttachment: "fixed",
            transform: `translateY(${-scrollY * 0.2}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Mind Hack
              </span>
              ?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A revolutionary event combining neuroscience, technology, and
              personal development to unlock your brain's full potential.
            </p>
          </div>

          {/* Central Bot GIF */}
          {/* <div className="flex justify-center mb-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="./bot.gif"
                  alt="AI Bot Assistant"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain mx-auto"
                />
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Your AI Guide
                  </h3>
                  <p className="text-sm text-gray-600">
                    Powered by Advanced Neural Networks
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Feature Cards */}
          <div className="space-y-20">
            {/* Card 1 - Cognitive Enhancement */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                    alt="Cognitive Enhancement"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    1
                  </div>
                  <FaBrain className="text-3xl text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Cognitive Enhancement
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Learn cutting-edge techniques to improve memory, focus, and
                  learning speed from world-class neuroscientists. Discover how
                  to optimize your brain's performance using proven scientific
                  methods.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Memory Training
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Focus Techniques
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Speed Learning
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Technology Integration */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-blue-50 p-8">
                  <img
                    src="./chatBot.gif"
                    alt="AI Technology"
                    className="w-64 h-64 object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <FaCog className="text-2xl text-purple-400 animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    2
                  </div>
                  <FaRocket className="text-3xl text-purple-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Technology Integration
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience the latest brain-computer interfaces and
                  neurotechnology that's revolutionizing human potential.
                  Interact with AI systems designed to enhance cognitive
                  abilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    Brain-Computer Interface
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    AI Integration
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    Neurofeedback
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Peak Performance */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
                    alt="Peak Performance"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    3
                  </div>
                  <FaRocket className="text-3xl text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Peak Performance With AI Guidance
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Master the mental frameworks used by elite athletes, CEOs, and
                  artists to achieve extraordinary results. Learn the psychology
                  of peak performance and flow states.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Flow States
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Mental Training
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Performance Psychology
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 - Community Building */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-red-50 p-8">
                  <img
                    src="./robot.gif"
                    alt="Community Building"
                    className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <FaUsers className="text-2xl text-orange-400" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    4
                  </div>
                  <FaUsers className="text-3xl text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Community Building
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Connect with like-minded individuals passionate about pushing
                  the boundaries of human cognition and achievement. Build
                  lasting relationships with innovators and thought leaders.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Networking
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Collaboration
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Expert Speakers",
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "100+",
                label: "Interactive Workshops",
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "5K+",
                label: "Global Attendees",
                color: "from-green-500 to-green-600",
              },
              {
                number: "24",
                label: "Hours of Content",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} text-white p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-lg font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Sponsors Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading organizations supporting the future of cognitive
              enhancement and human potential
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <img
                  src={sponsor || "/placeholder.svg"}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=800&fit=crop)",
            backgroundAttachment: "fixed",
            transform: `translateY(${-scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join the Cognitive Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Subscribe to get exclusive updates, early access, and special offers
            for Mind Hack 2025. Be part of the future of human potential.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-12 pr-4 py-5 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none bg-white/95 backdrop-blur-sm text-gray-900 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(270deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
