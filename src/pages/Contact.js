"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
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
  FaSpinner,
  FaExclamationTriangle,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [activeTab, setActiveTab] = useState("message");
  const [submissionState, setSubmissionState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });

  const formRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  // Intersection Observer for form animation
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

  // Scroll effect for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Success animation sequence
  useEffect(() => {
    if (showSuccessAnimation) {
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 300),
        setTimeout(() => setAnimationStep(2), 800),
        setTimeout(() => setAnimationStep(3), 1300),
        setTimeout(() => setAnimationStep(4), 1800),
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, [showSuccessAnimation]);

  // Form validation
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      errors.subject = "Subject must be at least 5 characters long";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setFormErrors((prev) => ({
          ...prev,
          general: "File size must be less than 10MB",
        }));
        return;
      }

      // Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "application/pdf",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setFormErrors((prev) => ({
          ...prev,
          general:
            "File type not supported. Please upload images, PDF, or document files.",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
      }));
      setFileName(file.name);

      // Clear any previous file errors
      if (formErrors.general) {
        setFormErrors((prev) => ({
          ...prev,
          general: undefined,
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    const backend_domain_name =
      "https://mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setSubmissionState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    });

    try {
      // Prepare form data for submission
      const submitData = new FormData();
      submitData.append("name", formData.name.trim());
      submitData.append("email", formData.email.trim());
      submitData.append("subject", formData.subject.trim());
      submitData.append("message", formData.message.trim());

      // Make API call
      const response = await axios.post(
        `${backend_domain_name}/api/contact`,
        submitData
      );

      // Check if response is successful
      if (response.status === 200) {
        setSubmissionState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: "",
        });

        // Start success animation
        setShowSuccessAnimation(true);
        setAnimationStep(0);

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setFileName("");
          setFormErrors({});
          setShowSuccessAnimation(false);
          setAnimationStep(0);
          setSubmissionState({
            isLoading: false,
            isSuccess: false,
            isError: false,
            errorMessage: "",
          });
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);

      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error.response) {
        // Server responded with error status
        if (error.response.status === 400) {
          errorMessage = "Please check your input and try again.";
        } else if (error.response.status === 429) {
          errorMessage =
            "Too many requests. Please wait a moment and try again.";
        } else if (error.response.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        // Network error
        errorMessage =
          "Network error. Please check your connection and try again.";
      } else if (error.code === "ECONNABORTED") {
        // Timeout error
        errorMessage = "Request timeout. Please try again.";
      }

      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage,
      });

      // Auto-hide error after 10 seconds
      setTimeout(() => {
        setSubmissionState((prev) => ({
          ...prev,
          isError: false,
          errorMessage: "",
        }));
      }, 10000);
    }
  };

  // Contact methods data
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
      <section className="py-16 px-4">
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
      </section>

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
                {/* Error Alert */}
                {submissionState.isError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationTriangle className="text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800 mb-1">
                        Submission Failed
                      </h4>
                      <p className="text-red-700 text-sm">
                        {submissionState.errorMessage}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setSubmissionState((prev) => ({
                          ...prev,
                          isError: false,
                          errorMessage: "",
                        }))
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}

                {/* General Form Error */}
                {formErrors.general && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationTriangle className="text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-red-700 text-sm">
                        {formErrors.general}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setFormErrors((prev) => ({
                          ...prev,
                          general: undefined,
                        }))
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}

                {!submissionState.isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
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
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                            formErrors.name
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your full name"
                          disabled={submissionState.isLoading}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
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
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                            formErrors.email
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="your.email@example.com"
                          disabled={submissionState.isLoading}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
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
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                            formErrors.subject
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          }`}
                          placeholder="What is your message about?"
                          disabled={submissionState.isLoading}
                        />
                      </div>
                      {formErrors.subject && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message * ({formData.message.length}/1000)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none ${
                          formErrors.message
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Please provide details about your inquiry..."
                        disabled={submissionState.isLoading}
                        maxLength={1000}
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submissionState.isLoading}
                      className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submissionState.isLoading ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* Success Animation */
                  <div className="text-center py-12">
                    <div className="relative mb-8">
                      {/* Animated Success Icon */}
                      <div
                        className={`w-24 h-24 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${
                          showSuccessAnimation
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                      >
                        <FaCheckCircle className="text-white text-4xl" />
                      </div>

                      {/* Ripple Effect */}
                      {showSuccessAnimation && (
                        <>
                          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-teal-200 animate-ping opacity-20"></div>
                          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-indigo-200 animate-ping opacity-20 animation-delay-200"></div>
                        </>
                      )}
                    </div>

                    {/* Success Message */}
                    <div
                      className={`transition-all duration-500 delay-300 ${
                        animationStep >= 1
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully! 🎉
                      </h3>
                      <p className="text-gray-600 mb-8 text-lg">
                        Thank you for reaching out to Mind Hack. We've received
                        your message and will get back to you shortly.
                      </p>
                    </div>

                    {/* Progress Steps */}
                    <div
                      className={`bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-100 rounded-2xl p-6 text-left transition-all duration-500 delay-500 ${
                        animationStep >= 2
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-indigo-800 font-bold mb-4 text-lg">
                        What happens next?
                      </p>
                      <div className="space-y-4">
                        <div
                          className={`flex items-center gap-4 transition-all duration-300 ${
                            animationStep >= 2 ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                            <FaCheck className="text-white text-sm" />
                          </div>
                          <span className="text-gray-700">
                            Your message has been received and logged
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-4 transition-all duration-300 delay-200 ${
                            animationStep >= 3 ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">
                              2
                            </span>
                          </div>
                          <span className="text-gray-700">
                            You'll receive a confirmation email within 5 minutes
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-4 transition-all duration-300 delay-400 ${
                            animationStep >= 4 ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">
                              3
                            </span>
                          </div>
                          <span className="text-gray-700">
                            A specialist will contact you within 24 hours
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div
                      className={`mt-6 p-4 bg-white border border-gray-200 rounded-xl transition-all duration-500 delay-700 ${
                        animationStep >= 4
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-sm text-gray-600">
                        <strong>Reference ID:</strong> MH-
                        {Date.now().toString().slice(-6)}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Keep this reference for your records
                      </p>
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
