"use client";

import { useState, useEffect } from "react";
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
  FaLock,
  FaSpinner,
  FaExclamationTriangle,
  FaTimes,
  FaCheck,
  FaEye,
  FaEyeSlash,
  FaUserCircle,
  FaCalendarAlt,
  FaSignOutAlt,
  FaEdit,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [storedUserData, setStoredUserData] = useState(null);

  const [submissionState, setSubmissionState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });

  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

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

  // Password strength calculation
  useEffect(() => {
    const calculatePasswordStrength = (password) => {
      let strength = 0;
      if (password.length >= 8) strength += 1;
      if (/[a-z]/.test(password)) strength += 1;
      if (/[A-Z]/.test(password)) strength += 1;
      if (/[0-9]/.test(password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(password)) strength += 1;
      return strength;
    };

    setPasswordStrength(calculatePasswordStrength(formData.password));
  }, [formData.password]);

  // Scroll-based background movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load stored user data on component mount
  useEffect(() => {
    const loadStoredUserData = () => {
      try {
        const stored = localStorage.getItem("mindHackUserData");
        if (stored) {
          const userData = JSON.parse(stored);
          console.log(userData, "is userdata");
          setStoredUserData(userData);
        }
      } catch (error) {
        console.error("Error loading stored user data:", error);
      }
    };

    loadStoredUserData();
  }, []);

  // Clear stored user data (logout)
  const handleLogout = () => {
    try {
      localStorage.removeItem("mindHackUserData");
      setStoredUserData(null);
      // Reset all states
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setFormErrors({});
      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
      });
      setShowSuccessAnimation(false);
      setAnimationStep(0);
      console.log("User data cleared from localStorage");
    } catch (error) {
      console.error("Error clearing user data:", error);
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
      errors.firstName = "First name can only contain letters and spaces";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
      errors.lastName = "Last name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number (minimum 10 digits)";
    }

    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (passwordStrength < 3) {
      errors.password =
        "Password is too weak. Include uppercase, lowercase, numbers, and special characters";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
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

  // Store user data in localStorage
  const storeUserData = (userData, responseData) => {
    try {
      const dataToStore = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        userId: responseData.userId || `MH-${Date.now().toString().slice(-8)}`,
        registrationDate: new Date().toISOString(),
        registrationTime: new Date().toLocaleString(),
      };

      localStorage.setItem("mindHackUserData", JSON.stringify(dataToStore));
      setStoredUserData(dataToStore);

      console.log("User data stored in localStorage:", dataToStore);
    } catch (error) {
      console.error("Error storing user data:", error);
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
      // Prepare data for submission
      const submitData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        password: formData.password,
      };

      // Make API call
      console.log(submitData);
      const response = await axios.post(
        `${backend_domain_name}/api/register`,
        submitData
      );

      // Check if response is successful
      if (response.status === 200 || response.status === 201) {
        // Store user data in localStorage (excluding password)
        storeUserData(submitData, response.data);

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
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          });
          setFormErrors({});
          setShowSuccessAnimation(false);
          setAnimationStep(0);
          setSubmissionState({
            isLoading: false,
            isSuccess: false,
            isError: false,
            errorMessage: "",
          });
        }, 8000);
      }
    } catch (error) {
      console.error("Registration error:", error);

      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error.response) {
        // Server responded with error status
        if (error.response.status === 400) {
          errorMessage =
            error.response.data?.message ||
            "Please check your input and try again.";
        } else if (error.response.status === 409) {
          errorMessage =
            "An account with this email already exists. Please use a different email or try logging in.";
        } else if (error.response.status === 422) {
          errorMessage =
            "An account with this email already exists. Please use a different email or try logging in.";
        } else if (error.response.status === 429) {
          errorMessage =
            "Too many registration attempts. Please wait a moment and try again.";
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

  // Get password strength color and text
  const getPasswordStrengthInfo = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return {
          color: "bg-red-500",
          text: "Very Weak",
          textColor: "text-red-600",
        };
      case 2:
        return {
          color: "bg-orange-500",
          text: "Weak",
          textColor: "text-orange-600",
        };
      case 3:
        return {
          color: "bg-yellow-500",
          text: "Fair",
          textColor: "text-yellow-600",
        };
      case 4:
        return {
          color: "bg-blue-500",
          text: "Good",
          textColor: "text-blue-600",
        };
      case 5:
        return {
          color: "bg-green-500",
          text: "Strong",
          textColor: "text-green-600",
        };
      default:
        return { color: "bg-gray-300", text: "", textColor: "text-gray-500" };
    }
  };

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
            {storedUserData ? (
              <>
                Welcome Back{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                  {storedUserData.firstName}!
                </span>
              </>
            ) : (
              <>
                Join{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                  Mind Hack
                </span>
              </>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
            {storedUserData
              ? "You're already part of our exclusive community. Access your dashboard below."
              : "Ready to unlock your mind's potential? Let's start your transformation journey together"}
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {storedUserData ? (
                <>
                  Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Dashboard
                  </span>
                </>
              ) : (
                <>
                  Let's{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Connect
                  </span>
                </>
              )}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {storedUserData
                ? "Manage your account information and access your Mind Hack journey details"
                : "Whether you have questions about our programs, want to schedule a consultation, or are ready to begin your cognitive enhancement journey, we're here to help"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {storedUserData ? "Your Benefits" : "Why Choose Mind Hack?"}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {storedUserData
                          ? "Premium Access Activated"
                          : "Scientifically Proven Methods"}
                      </h4>
                      <p className="text-gray-600">
                        {storedUserData
                          ? "You now have full access to all Mind Hack programs, workshops, and exclusive content."
                          : "Our techniques are backed by peer-reviewed research and validated by leading neuroscience institutions worldwide."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {storedUserData
                          ? "Personalized Dashboard"
                          : "Personalized Approach"}
                      </h4>
                      <p className="text-gray-600">
                        {storedUserData
                          ? "Your custom dashboard tracks progress and provides personalized recommendations based on your goals."
                          : "Every program is tailored to your unique cognitive profile and goals, ensuring maximum effectiveness and results."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {storedUserData
                          ? "24/7 Support Access"
                          : "Expert Support Team"}
                      </h4>
                      <p className="text-gray-600">
                        {storedUserData
                          ? "As a registered member, you have priority access to our support team and community forums."
                          : "Our team of neuroscientists, coaches, and support specialists are available to guide you every step of the way."}
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

            {/* Conditional Rendering: User Dashboard OR Registration Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>

              {/* Show User Dashboard if stored data exists */}
              {storedUserData ? (
                <div className="space-y-6">
                  {/* User Profile Header */}
                  <div className="text-center pb-6 border-b border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUserCircle className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Welcome, {storedUserData.firstName}!
                    </h3>
                    <p className="text-gray-600">Mind Hack Premium Member</p>
                  </div>

                  {/* User Information Display */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Account Information
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaUser className="text-blue-500" />
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Full Name
                          </span>
                        </div>
                        <p className="text-gray-900 font-medium">
                          {storedUserData.firstName} {storedUserData.lastName}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaEnvelope className="text-green-500" />
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Email
                          </span>
                        </div>
                        <p className="text-gray-900 font-medium break-all">
                          {storedUserData.email}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaPhone className="text-purple-500" />
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Phone
                          </span>
                        </div>
                        <p className="text-gray-900 font-medium">
                          {storedUserData.phone}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <FaCalendarAlt className="text-orange-500" />
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            Member Since
                          </span>
                        </div>
                        <p className="text-gray-900 font-medium">
                          {storedUserData.registrationTime}
                        </p>
                      </div>

                      {storedUserData.userId && (
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <FaCheckCircle className="text-blue-600" />
                            <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
                              User ID
                            </span>
                          </div>
                          <p className="text-blue-900 font-mono text-sm">
                            {storedUserData.userId}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-6 border-t border-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    >
                      <FaSignOutAlt />
                      Logout & Clear Data
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        Account Status
                      </span>
                    </div>
                    <p className="text-green-700 text-sm">
                      Your account is active and all premium features are
                      available. Data is securely stored locally.
                    </p>
                  </div>
                </div>
              ) : (
                /* Show Registration Form if no stored data */
                <>
                  {/* Error Alert */}
                  {submissionState.isError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                      <FaExclamationTriangle className="text-red-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-medium text-red-800 mb-1">
                          Registration Failed
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

                  {!submissionState.isSuccess ? (
                    <>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Register for Mind Hack 2025
                        </h3>
                        <p className="text-gray-600">
                          Join thousands of innovators and transform your
                          cognitive abilities. Fill out the form below to secure
                          your spot.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* First Name */}
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
                                className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                                  formErrors.firstName
                                    ? "border-red-300 bg-red-50"
                                    : "border-gray-300"
                                }`}
                                placeholder="Enter your first name"
                                disabled={submissionState.isLoading}
                              />
                            </div>
                            {formErrors.firstName && (
                              <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                                <FaExclamationTriangle size={12} />
                                {formErrors.firstName}
                              </p>
                            )}
                          </div>

                          {/* Last Name */}
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
                                className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                                  formErrors.lastName
                                    ? "border-red-300 bg-red-50"
                                    : "border-gray-300"
                                }`}
                                placeholder="Enter your last name"
                                disabled={submissionState.isLoading}
                              />
                            </div>
                            {formErrors.lastName && (
                              <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                                <FaExclamationTriangle size={12} />
                                {formErrors.lastName}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
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
                              className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
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

                        {/* Phone */}
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
                              className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                                formErrors.phone
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-300"
                              }`}
                              placeholder="+1 (555) 123-4567"
                              disabled={submissionState.isLoading}
                            />
                          </div>
                          {formErrors.phone && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                              <FaExclamationTriangle size={12} />
                              {formErrors.phone}
                            </p>
                          )}
                        </div>

                        {/* Password */}
                        <div>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Password *
                          </label>
                          <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                                formErrors.password
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-300"
                              }`}
                              placeholder="Enter your password"
                              disabled={submissionState.isLoading}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          </div>

                          {/* Password Strength Indicator */}
                          {formData.password && (
                            <div className="mt-2">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                      getPasswordStrengthInfo().color
                                    }`}
                                    style={{
                                      width: `${(passwordStrength / 5) * 100}%`,
                                    }}
                                  ></div>
                                </div>
                                <span
                                  className={`text-xs font-medium ${
                                    getPasswordStrengthInfo().textColor
                                  }`}
                                >
                                  {getPasswordStrengthInfo().text}
                                </span>
                              </div>
                              <div className="text-xs text-gray-500">
                                Include: uppercase, lowercase, numbers, and
                                special characters
                              </div>
                            </div>
                          )}

                          {formErrors.password && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                              <FaExclamationTriangle size={12} />
                              {formErrors.password}
                            </p>
                          )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                          <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Confirm Password *
                          </label>
                          <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                                formErrors.confirmPassword
                                  ? "border-red-300 bg-red-50"
                                  : "border-gray-300"
                              }`}
                              placeholder="Confirm your password"
                              disabled={submissionState.isLoading}
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          </div>
                          {formErrors.confirmPassword && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                              <FaExclamationTriangle size={12} />
                              {formErrors.confirmPassword}
                            </p>
                          )}
                        </div>

                        {/* Benefits Box */}
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

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={submissionState.isLoading}
                          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {submissionState.isLoading ? (
                            <>
                              <FaSpinner className="animate-spin" />
                              Creating Account...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane />
                              Register Now
                            </>
                          )}
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                          By registering, you agree to our Terms of Service and
                          Privacy Policy. You can unsubscribe at any time.
                        </p>
                      </form>
                    </>
                  ) : (
                    /* Success Animation with Stored User Data */
                    <div className="text-center py-12">
                      <div className="relative mb-8">
                        {/* Animated Success Icon */}
                        <div
                          className={`w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${
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
                            <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-green-200 animate-ping opacity-20"></div>
                            <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-green-300 animate-ping opacity-20 animation-delay-200"></div>
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
                          Registration Successful! 🎉
                        </h3>
                        <p className="text-gray-600 mb-8 text-lg">
                          Welcome to Mind Hack 2025! You're now part of our
                          exclusive community of cognitive enhancement
                          enthusiasts.
                        </p>
                      </div>

                      {/* Progress Steps */}
                      <div
                        className={`bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-2xl p-6 text-left transition-all duration-500 delay-600 ${
                          animationStep >= 3
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        <p className="text-green-800 font-bold mb-4 text-lg">
                          What's next?
                        </p>
                        <div className="space-y-4">
                          <div
                            className={`flex items-center gap-4 transition-all duration-300 ${
                              animationStep >= 3 ? "opacity-100" : "opacity-50"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                              <FaCheck className="text-white text-sm" />
                            </div>
                            <span className="text-gray-700">
                              Your account has been created and data stored
                              securely
                            </span>
                          </div>
                          <div
                            className={`flex items-center gap-4 transition-all duration-300 delay-200 ${
                              animationStep >= 4 ? "opacity-100" : "opacity-50"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">
                                2
                              </span>
                            </div>
                            <span className="text-gray-700">
                              Check your email for verification and welcome
                              message
                            </span>
                          </div>
                          <div
                            className={`flex items-center gap-4 transition-all duration-300 delay-400 ${
                              animationStep >= 4 ? "opacity-100" : "opacity-50"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">
                                3
                              </span>
                            </div>
                            <span className="text-gray-700">
                              Access your dashboard and start your cognitive
                              journey
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div
                        className={`mt-6 p-4 bg-white border border-gray-200 rounded-xl transition-all duration-500 delay-800 ${
                          animationStep >= 4
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        <p className="text-sm text-gray-600">
                          <strong>Data Storage:</strong> Your information is
                          securely stored in your browser's localStorage
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          This data will persist until you clear your browser
                          data
                        </p>
                      </div>
                    </div>
                  )}
                </>
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

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Register;
