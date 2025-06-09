// import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// const Events = () => {
//   const events = [
//     {
//       id: 1,
//       title: "Mind Hack Workshop 2025",
//       date: "March 15, 2025",
//       time: "10:00 AM - 6:00 PM",
//       location: "Tech Hub, Silicon Valley",
//       description:
//         "Join us for an intensive workshop on cognitive enhancement and mental performance optimization.",
//       image:
//         "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
//     },
//     {
//       id: 2,
//       title: "Networking Mixer",
//       date: "March 20, 2025",
//       time: "7:00 PM - 10:00 PM",
//       location: "Downtown Convention Center",
//       description:
//         "Connect with like-minded individuals and industry professionals in a relaxed setting.",
//       image:
//         "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
//     },
//     {
//       id: 3,
//       title: "Innovation Summit",
//       date: "April 5, 2025",
//       time: "9:00 AM - 5:00 PM",
//       location: "Innovation Center",
//       description:
//         "Explore the latest trends in technology and innovation with expert speakers.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
//     },
//   ];

//   return (
//     <div>
//       {/* Banner */}
//       <section className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=300&fit=crop)",
//           }}
//         ></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
//           <p className="text-xl mt-2">Discover upcoming Mind Hack events</p>
//         </div>
//       </section>

//       {/* Events List */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8">
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//               >
//                 <div className="md:flex">
//                   <div className="md:w-1/3">
//                     <img
//                       src={event.image || "/placeholder.svg"}
//                       alt={event.title}
//                       className="w-full h-64 md:h-full object-cover"
//                     />
//                   </div>
//                   <div className="md:w-2/3 p-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       {event.title}
//                     </h3>
//                     <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
//                       <div className="flex items-center">
//                         <FaCalendar className="mr-2" />
//                         <span>{event.date}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <FaClock className="mr-2" />
//                         <span>{event.time}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <FaMapMarkerAlt className="mr-2" />
//                         <span>{event.location}</span>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6">{event.description}</p>
//                     <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                       Register Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Events;
"use client";

import { useState, useEffect } from "react";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Events = () => {
  const [scrollY, setScrollY] = useState(0);

  const events = [
    {
      id: 1,
      title: "Mind Hack Workshop 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Tech Hub, Silicon Valley",
      description:
        "Join us for an intensive workshop on cognitive enhancement and mental performance optimization. Learn from world-class neuroscientists and experience cutting-edge brain training techniques.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      attendees: "500+",
      category: "Workshop",
      featured: true,
      price: "$299",
    },
    {
      id: 2,
      title: "Networking Mixer",
      date: "March 20, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Downtown Convention Center",
      description:
        "Connect with like-minded individuals and industry professionals in a relaxed setting. Build meaningful relationships with innovators, entrepreneurs, and thought leaders.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      attendees: "200+",
      category: "Networking",
      featured: false,
      price: "Free",
    },
    {
      id: 3,
      title: "Innovation Summit",
      date: "April 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      description:
        "Explore the latest trends in technology and innovation with expert speakers. Discover breakthrough technologies that are shaping the future of human potential.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      attendees: "1000+",
      category: "Summit",
      featured: true,
      price: "$199",
    },
  ];

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

      {/* Enhanced Banner */}
      <section className="relative h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop)",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-600/40 to-indigo-700/50"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Discover transformative experiences that will unlock your mind's
            potential
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Events
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of innovators, entrepreneurs, and thought leaders
              at our exclusive events
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                  event.featured ? "ring-2 ring-blue-500/20" : ""
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <FaStar className="text-xs" />
                      Featured Event
                    </div>
                  </div>
                )}

                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="relative h-80 lg:h-full">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaCalendar className="text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{event.date}</div>
                            <div className="text-sm text-gray-500">Date</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <FaClock className="text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium">{event.time}</div>
                            <div className="text-sm text-gray-500">Time</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <FaMapMarkerAlt className="text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">{event.location}</div>
                            <div className="text-sm text-gray-500">
                              Location
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <FaUsers className="text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium">{event.attendees}</div>
                            <div className="text-sm text-gray-500">
                              Attendees
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                        <div>
                          <div className="text-3xl font-bold text-gray-900">
                            {event.price}
                          </div>
                          {event.price !== "Free" && (
                            <div className="text-sm text-gray-500">
                              per person
                            </div>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                            Register Now
                            <FaArrowRight className="text-sm" />
                          </button>
                          <button className="border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Don't Miss Out!
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our community and be the first to know about new events,
                exclusive workshops, and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                  View All Events
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
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

export default Events;
