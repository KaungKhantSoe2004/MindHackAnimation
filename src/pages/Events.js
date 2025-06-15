"use client";

import { useState, useEffect } from "react";
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaExclamationTriangle,
  FaSync,
  FaCalendarTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setStoreReduxEvents } from "../reducer/eventsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const backend_domain_name =
    "http://mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(false);
  const reduxEvents = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const [isServerError, setIsServerError] = useState(false);
  const [events, setEvents] = useState(reduxEvents.events);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${backend_domain_name}/api/events`);

      if (response.status == 200) {
        console.log(events);
        setEvents(response.data.data);
        dispatch(setStoreReduxEvents(response.data.data));
        setIsServerError(false);
      } else {
        setIsServerError(true);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error in fetchApi:", error);
      setLoading(false);
      setIsServerError(true);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchData();
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

          <div className="space-y-12">
            {loading && events.length == 0 ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-lg font-medium text-gray-600">
                  Loading events...
                </span>
              </div>
            ) : isServerError ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaExclamationTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-red-800">
                      Failed to load events
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        We're having trouble loading events. Please try again
                        later.
                      </p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <FaSync className="mr-2" /> Retry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-16">
                <FaCalendarTimes className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No events found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  There are currently no upcoming events.
                </p>
              </div>
            ) : (
              events?.map((event, index) => (
                <div
                  key={event.id}
                  className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                    event.featured ? "ring-2 ring-blue-500/20" : ""
                  }`}
                >
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
                            src={
                              event.img
                                ? `${backend_domain_name}/storage/app/public/${event.img}`
                                : "/placeholder.svg"
                            }
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
                            <p className="text-lg text-gray-600 ">
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
                                <div className="text-sm text-gray-500">
                                  Date
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <FaClock className="text-purple-600" />
                              </div>
                              <div>
                                <div className="font-medium">{event.time}</div>
                                <div className="text-sm text-gray-500">
                                  Time
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <FaMapMarkerAlt className="text-green-600" />
                              </div>
                              <div>
                                <div className="font-medium">
                                  {event.location}
                                </div>
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
                                <div className="font-medium">
                                  {event.attendees}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Attendees
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Price and CTA */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  navigate("/register");
                                }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                              >
                                Register Now
                                <FaArrowRight className="text-sm" />
                              </button>
                              {/* <button className="border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all">
                                Learn More
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
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
