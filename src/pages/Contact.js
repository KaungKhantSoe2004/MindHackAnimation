"use client";

import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }, 3000);
  };

  // Scroll-based background movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      details: [
        "123 Innovation Drive",
        "Silicon Valley, CA 94025",
        "United States",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "24/7 Support Available",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: [
        "info@mindhack.com",
        "support@mindhack.com",
        "partnerships@mindhack.com",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

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
      <section className="relative h-96 bg-gradient-to-br from-orange-500 via-red-600 to-pink-700 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop)",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-red-600/40 to-pink-700/50"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
            Ready to unlock your mind's potential? Let's start your
            transformation journey together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Connect
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you have questions about our programs, want to schedule a
              consultation, or are ready to begin your cognitive enhancement
              journey, we're here to help
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Mind Hack?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Scientifically Proven Methods
                      </h4>
                      <p className="text-gray-600">
                        Our techniques are backed by peer-reviewed research and
                        validated by leading neuroscience institutions
                        worldwide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Personalized Approach
                      </h4>
                      <p className="text-gray-600">
                        Every program is tailored to your unique cognitive
                        profile and goals, ensuring maximum effectiveness and
                        results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Expert Support Team
                      </h4>
                      <p className="text-gray-600">
                        Our team of neuroscientists, coaches, and support
                        specialists are available to guide you every step of the
                        way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h4>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Our Journey
                </h4>
                <p className="text-gray-600 mb-6">
                  Stay connected with the latest insights, research, and
                  community updates from Mind Hack
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: FaLinkedin,
                      color: "hover:bg-blue-600",
                      label: "LinkedIn",
                    },
                    {
                      icon: FaTwitter,
                      color: "hover:bg-blue-400",
                      label: "Twitter",
                    },
                    {
                      icon: FaFacebook,
                      color: "hover:bg-blue-700",
                      label: "Facebook",
                    },
                    {
                      icon: FaInstagram,
                      color: "hover:bg-pink-600",
                      label: "Instagram",
                    },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Registration Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>

              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Register for Mind Hack 2025
                    </h3>
                    <p className="text-gray-600">
                      Join thousands of innovators and transform your cognitive
                      abilities. Fill out the form below to secure your spot.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="Enter your first name"
                            required
                            minLength={2}
                          />
                        </div>
                        {formData.firstName &&
                          formData.firstName.length < 2 && (
                            <p className="text-red-500 text-sm mt-1">
                              First name must be at least 2 characters
                            </p>
                          )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Last Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="Enter your last name"
                            required
                            minLength={2}
                          />
                        </div>
                        {formData.lastName && formData.lastName.length < 2 && (
                          <p className="text-red-500 text-sm mt-1">
                            Last name must be at least 2 characters
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                      </div>
                      {formData.email &&
                        !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(
                          formData.email
                        ) && (
                          <p className="text-red-500 text-sm mt-1">
                            Please enter a valid email address
                          </p>
                        )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                          required
                          pattern="[\+]?[0-9\s\-$$$$]{10,}"
                        />
                      </div>
                      {formData.phone &&
                        !/[+]?[0-9\s\-$$$$]{10,}/.test(formData.phone) && (
                          <p className="text-red-500 text-sm mt-1">
                            Please enter a valid phone number (minimum 10
                            digits)
                          </p>
                        )}
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        What you'll get:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-orange-500 text-xs" />
                          Early access to Mind Hack 2025 events
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-orange-500 text-xs" />
                          Exclusive workshops and training materials
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-orange-500 text-xs" />
                          Access to our global community platform
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-orange-500 text-xs" />
                          Monthly cognitive enhancement tips and insights
                        </li>
                      </ul>
                    </div>

                    <button
                      type="submit"
                      disabled={
                        !formData.firstName ||
                        !formData.lastName ||
                        !formData.email ||
                        !formData.phone ||
                        formData.firstName.length < 2 ||
                        formData.lastName.length < 2 ||
                        !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(
                          formData.email
                        ) ||
                        !/[+]?[0-9\s\-$$$$]{10,}/.test(formData.phone)
                      }
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <FaPaperPlane />
                      Register Now
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By registering, you agree to our Terms of Service and
                      Privacy Policy. You can unsubscribe at any time.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Registration Successful!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Welcome to Mind Hack 2025! You're now part of our exclusive
                    community of cognitive enhancement enthusiasts.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-medium mb-2">
                      What's next?
                    </p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>
                        • Check your email for a welcome message and next steps
                      </li>
                      <li>
                        • Join our community platform to connect with other
                        members
                      </li>
                      <li>
                        • Access your free cognitive assessment and training
                        materials
                      </li>
                    </ul>
                  </div>
                </div>
              )}
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

export default Contact;
