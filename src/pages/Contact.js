"use client";

import { useState, useEffect, useRef } from "react";
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
  FaPaperclip,
  FaCommentAlt,
  FaHeadset,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    attachment: null,
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("message");
  const formRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        attachment: file,
      });
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        attachment: null,
      });
      setFileName("");
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FaHeadset,
      title: "Customer Support",
      description: "Get help with your account or services",
      action: "Call us at +1 (555) 123-4567",
      color: "bg-teal-500",
    },
    {
      icon: FaLightbulb,
      title: "Business Inquiries",
      description: "Partner with us or explore opportunities",
      action: "Email business@mindhack.com",
      color: "bg-indigo-500",
    },
    {
      icon: FaHandshake,
      title: "Career Opportunities",
      description: "Join our innovative team",
      action: "Visit careers.mindhack.com",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-teal-500 to-indigo-600 flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/50 via-indigo-600/40 to-purple-700/50"></div>

        <div className="max-w-7xl mx-auto relative z-10 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="text-white space-y-6"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
                We'd love to hear from you
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Let's Start a{" "}
                <span className="text-teal-200">Conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg">
                Have questions about our cognitive enhancement programs or want
                to learn more? Our team is here to help you unlock your mind's
                full potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-teal-50 transition-colors flex items-center gap-2"
                >
                  <FaPaperPlane />
                  Send a Message
                </a>
                <a
                  href="tel:+15551234567"
                  className="px-6 py-3 bg-indigo-700/50 backdrop-blur-sm text-white rounded-full font-medium hover:bg-indigo-700/70 transition-colors flex items-center gap-2"
                >
                  <FaPhone />
                  Call Us
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Visit Our Office
                      </h3>
                      <p className="text-gray-600">
                        123 Innovation Drive, Silicon Valley
                      </p>
                    </div>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop"
                    alt="Office location"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-medium text-gray-900 mb-1">Hours</h4>
                      <p className="text-sm text-gray-600">Mon-Fri: 9AM-6PM</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-sm text-gray-600">info@mindhack.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the best way to connect with our team based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  <method.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-medium text-indigo-600">{method.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-16 px-4 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
                  Mind Hack
                </span>
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our programs, want to schedule
                a consultation, or are interested in partnership opportunities,
                we're here to help.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Our Response Time
                    </h3>
                    <p className="text-gray-600">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500" />
                    <span className="text-gray-700">
                      Questions about programs: 2-4 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500" />
                    <span className="text-gray-700">
                      Technical support: 4-6 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500" />
                    <span className="text-gray-700">
                      Partnership inquiries: 1-2 business days
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4 mb-6">
                  {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    )
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaPhone className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">info@mindhack.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/80">
                        123 Innovation Drive, Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex border-b border-gray-100">
                <button
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === "message"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("message")}
                >
                  Send Message
                </button>
              </div>

              <div className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                          required
                          minLength={2}
                        />
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
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <div className="relative">
                        <FaCommentAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="What is your message about?"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Please provide details about your inquiry..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    >
                      <FaPaperPlane />
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out to Mind Hack. We've received
                      your message and will get back to you shortly.
                    </p>
                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-left">
                      <p className="text-indigo-800 font-medium mb-2">
                        What happens next?
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-700 text-xs">1</span>
                          </div>
                          <span>Our team will review your message</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-700 text-xs">2</span>
                          </div>
                          <span>You'll receive a confirmation email</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-700 text-xs">3</span>
                          </div>
                          <span>
                            A specialist will contact you within 24 hours
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mind Hack</h3>
              <p className="text-gray-400 mb-6">
                Unlocking human potential through advanced cognitive
                enhancement.
              </p>
              <div className="flex gap-4">
                {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cognitive Enhancement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Memory Mastery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Focus Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Creative Expansion
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mind Hack. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Made with ❤️ in Silicon Valley
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
