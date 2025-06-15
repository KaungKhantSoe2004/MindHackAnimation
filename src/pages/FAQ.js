"use client";

import { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaHeadset,
  FaExclamationTriangle,
  FaSync,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setStoreReduxFaq } from "../reducer/faqSlice";
import axios from "axios";

const FAQ = () => {
  const backend_domain_name =
    "https://mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const [loading, setLoading] = useState(false);
  const reduxFaqs = useSelector((store) => store.faqs);
  const dispatch = useDispatch();
  const [isServerError, setIsServerError] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const [faqs, setFaqs] = useState(reduxFaqs.faqs);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Scroll-based background movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${backend_domain_name}/api/faqs`);

      if (response.status == 200) {
        console.log(faqs);
        setFaqs(response.data.data);
        dispatch(setStoreReduxFaq(response.data.data));
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
      <section className="relative h-96 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=400&fit=crop)",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/50 via-blue-600/40 to-purple-700/50"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Everything you need to know about Mind Hack and cognitive
            enhancement
          </p>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                Answers
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our programs,
              technology, and approach to cognitive enhancement
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {loading && faqs.length == 0 ? (
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="animate-pulse flex space-x-4 w-full">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div className="rounded-full bg-gray-200 h-8 w-8"></div>
                  </div>
                  <div className="animate-pulse flex space-x-4 w-full">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                      </div>
                    </div>
                    <div className="rounded-full bg-gray-200 h-8 w-8"></div>
                  </div>
                </div>
              </div>
            ) : isServerError ? (
              <div className="bg-white border border-red-200 rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-red-100 p-4 rounded-full">
                    <FaExclamationTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Failed to Load FAQs
                  </h3>
                  <p className="text-gray-600">
                    We're having trouble loading the frequently asked questions.
                    Please try again later.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-md transition-all flex items-center gap-2"
                  >
                    <FaSync /> Try Again
                  </button>
                </div>
              </div>
            ) : faqs.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-teal-100 p-4 rounded-full">
                    <FaQuestionCircle className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    No FAQs Available
                  </h3>
                  <p className="text-gray-600">
                    We don't have any frequently asked questions at the moment.
                    Check back later or contact our support team.
                  </p>
                  <button className="mt-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-md transition-all flex items-center gap-2">
                    <FaHeadset /> Contact Support
                  </button>
                </div>
              </div>
            ) : (
              faqs?.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group-hover:bg-gray-50/50"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-teal-600 transition-colors">
                      {faq.q}
                    </h4>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center text-white transition-transform duration-300 ${
                        openFAQ === faq.id ? "rotate-180" : ""
                      }`}
                    >
                      {openFAQ === faq.id ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFAQ === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4 mb-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-20 bg-gradient-to-br from-teal-50 to-purple-50 rounded-3xl p-12 border border-teal-100 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <FaHeadset size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our expert team is here to help you understand how Mind Hack can
                transform your cognitive abilities. Get personalized answers to
                your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center">
                  <FaHeadset />
                  Contact Support
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-600 hover:text-white transition-all flex items-center gap-2 justify-center">
                  <FaUsers />
                  Join Community
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

export default FAQ;
