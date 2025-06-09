// import { FaPlay } from "react-icons/fa";

// const History = () => {
//   return (
//     <div>
//       {/* Banner */}
//       <section className="relative h-64 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=300&fit=crop)",
//           }}
//         ></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-4xl md:text-5xl font-bold">History</h1>
//           <p className="text-xl mt-2">Our journey through the years</p>
//         </div>
//       </section>

//       {/* Showcase Video Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Showcase Video
//             </h2>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
//               <img
//                 src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop"
//                 alt="Showcase Video Thumbnail"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all">
//                   <FaPlay className="text-gray-900 text-2xl ml-1" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* 2022 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=250&fit=crop"
//                 alt="Mind Hack 2022"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Lorem ipsum dolor 2022
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore
//                 </p>
//                 <div className="mt-6">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                     Sed ut perspiciatis unde omnis
//                   </h4>
//                   <p className="text-gray-600 text-sm">
//                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//                     odit aut fugit, sed quia consequuntur magni dolores eos qui
//                     ratione voluptatem sequi nesciunt. Neque porro quisquam est,
//                     qui dolorem ipsum quia dolor sit amet.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* 2023 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=250&fit=crop"
//                 alt="Mind Hack 2023"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Lorem ipsum dolor 2023
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore
//                 </p>
//                 <div className="mt-6">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                     Sed ut perspiciatis unde omnis
//                   </h4>
//                   <p className="text-gray-600 text-sm">
//                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//                     odit aut fugit, sed quia consequuntur magni dolores eos qui
//                     ratione voluptatem sequi nesciunt. Neque porro quisquam est,
//                     qui dolorem ipsum quia dolor sit amet.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default History;
"use client";

import { useState, useEffect } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaCalendar,
  FaUsers,
  FaLightbulb,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";

const History = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Timeline data
  const timelineEvents = [
    {
      year: 2020,
      title: "The Beginning of Mind Hack",
      description:
        "Founded by a group of neuroscientists and tech entrepreneurs, Mind Hack began as a small workshop series focused on cognitive enhancement techniques.",
      achievements: [
        "First workshop with 50 participants",
        "Developed initial brain training protocols",
        "Established partnerships with 3 research institutions",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      attendees: 50,
      location: "San Francisco, CA",
      highlight: "First successful demonstration of neurofeedback training",
    },
    {
      year: 2021,
      title: "Expanding Horizons",
      description:
        "Mind Hack grew rapidly as interest in cognitive enhancement surged. We expanded our program to include virtual workshops and international participants.",
      achievements: [
        "Launched online learning platform",
        "Expanded to 5 international locations",
        "Published first research paper on cognitive enhancement",
      ],
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      attendees: 500,
      location: "Virtual & Multiple Cities",
      highlight: "Featured in leading neuroscience publications",
    },
    {
      year: 2022,
      title: "Breakthrough Innovations",
      description:
        "A landmark year for Mind Hack with the introduction of our proprietary brain-computer interface technology and expanded research initiatives.",
      achievements: [
        "Unveiled MindSync™ BCI technology",
        "Secured $5M in research funding",
        "Established the Cognitive Enhancement Research Lab",
      ],
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      attendees: 1200,
      location: "Boston, MA",
      highlight:
        "First successful integration of AI with neurofeedback training",
    },
    {
      year: 2023,
      title: "Global Recognition",
      description:
        "Mind Hack achieved international acclaim as our methodologies demonstrated measurable improvements in cognitive performance across diverse populations.",
      achievements: [
        "Expanded to 12 countries worldwide",
        "Launched the Mind Hack Certification Program",
        "Partnered with leading tech companies",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      attendees: 3000,
      location: "Tokyo, London, New York",
      highlight: "Recognized with the Global Innovation Award",
    },
    {
      year: 2024,
      title: "Democratizing Access",
      description:
        "Focused on making cognitive enhancement accessible to everyone, we launched affordable programs and scholarships for underserved communities.",
      achievements: [
        "Introduced the Mind Hack Community Initiative",
        "Provided 500 scholarships to students",
        "Developed mobile applications for daily brain training",
      ],
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      attendees: 5000,
      location: "Global",
      highlight: "Reached 100,000 users on our digital platform",
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
      <section className="relative h-96 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=400&fit=crop)",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/50 via-purple-600/40 to-blue-700/50"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Exploring the evolution of Mind Hack from inception to global
            movement
          </p>
        </div>
      </section>

      {/* Enhanced Showcase Video Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Story
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch how Mind Hack evolved from a small workshop to a global
              movement transforming human potential
            </p>
          </div>

          {/* Video Player */}
          <div className="relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl">
              {videoPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Mind Hack Journey"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=675&fit=crop"
                    alt="Mind Hack Journey Video Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button
                      onClick={() => setVideoPlaying(true)}
                      className="bg-white/90 hover:bg-white text-purple-600 hover:text-purple-700 rounded-full w-20 h-20 flex items-center justify-center transition-all transform hover:scale-110 shadow-xl group-hover:shadow-2xl mb-6"
                    >
                      <FaPlay className="text-3xl ml-1" />
                    </button>
                    <h3 className="text-white text-2xl md:text-3xl font-bold max-w-lg text-center px-4">
                      The Mind Hack Journey: Transforming Human Potential
                    </h3>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: FaCalendar, label: "Years of Innovation", value: "5+" },
              { icon: FaUsers, label: "Global Participants", value: "10,000+" },
              { icon: FaLightbulb, label: "Research Papers", value: "24" },
              { icon: FaGlobe, label: "Countries Reached", value: "42" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                  <stat.icon size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Timeline
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the key milestones that have shaped Mind Hack's evolution
              and impact
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block"></div>

            {/* Timeline Events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Year Marker (Desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl z-10">
                      {event.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-5/12 mb-8 md:mb-0">
                    {/* Year Marker (Mobile) */}
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl mb-6 md:hidden mx-auto">
                      {event.year}
                    </div>

                    <div
                      className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full ${
                        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={`Mind Hack ${event.year}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                            {event.location}
                          </div>
                          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                            <FaUsers className="text-xs" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {event.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <FaTrophy className="text-purple-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {event.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-600"
                              >
                                <div className="min-w-4 mt-1">
                                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                </div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-purple-600 font-medium">
                            <FaLightbulb />
                            <span>Highlight: {event.highlight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline layout */}
                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Future Marker */}
            <div className="relative mt-24 text-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 hidden md:flex">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl z-10">
                  2025
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12 border border-indigo-100 shadow-lg max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of Mind Hack
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  As we look ahead to 2025 and beyond, we're committed to
                  pushing the boundaries of human potential through
                  groundbreaking research, accessible technology, and global
                  community building.
                </p>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
                  Join Our Journey
                  <FaArrowRight />
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

export default History;
