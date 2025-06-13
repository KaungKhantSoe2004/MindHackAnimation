"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaBrain,
  FaRocket,
  FaUsers,
  FaCog,
  FaTrophy,
  FaGamepad,
  FaFire,
  FaChartLine,
} from "react-icons/fa";

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-based effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/30 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400/25 rounded-full animate-float-2"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-cyan-400/35 rounded-full animate-float-3"></div>
        <div className="absolute top-80 right-1/3 w-5 h-5 bg-indigo-400/20 rounded-full animate-float-4"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500/25 rounded-full animate-float-5"></div>
        <div className="absolute bottom-60 right-10 w-4 h-4 bg-purple-500/30 rounded-full animate-float-6"></div>

        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-6 h-6 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 border border-purple-400/15 rotate-45 animate-spin-reverse"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 border border-cyan-400/25 animate-pulse-slow"></div>

        {/* Neural network lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse-medium"></div>
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
              className={`absolute inset-0 bg-cover bg-center transition-all duration-3000 ease-in-out ${
                index === currentBgIndex
                  ? "opacity-15 scale-105"
                  : "opacity-0 scale-100"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translateY(${scrollY * 0.2}px) scale(${
                  index === currentBgIndex ? 1.05 : 1
                })`,
              }}
            />
          ))}
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-purple-600/50 to-indigo-700/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY / 800),
          }}
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">Mind</span>{" "}
              <span className="inline-block animate-fade-in-up animation-delay-200">
                Hack
              </span>
            </h1>
            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
              2025
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Unleash Your Potential Through Revolutionary Neuroscience &
            Technology
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <button className="group bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-3xl">
              <span className="flex items-center justify-center gap-2">
                Register Now
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2">
                Learn More
                <FaBrain className="group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What is Mind Hack Section */}
      <section
        ref={aboutSectionRef}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Section Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-all duration-700 animate-pulse-slow"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 group-hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="AI Bot Assistant"
                  className="w-64 h-64 object-contain mx-auto group-hover:scale-110 transition-transform duration-500"
                />
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Your AI Guide
                  </h3>
                  <p className="text-gray-600">
                    Powered by Advanced Neural Networks
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Feature Cards */}
          <div className="space-y-24">
            {/* Card 1 - Cognitive Enhancement */}
            <div className="flex flex-col lg:flex-row items-center gap-16 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                    alt="Cognitive Enhancement"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaBrain className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    1
                  </div>
                  <FaBrain className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Cognitive Enhancement
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Learn cutting-edge techniques to improve memory, focus, and
                  learning speed from world-class neuroscientists. Discover how
                  to optimize your brain's performance using proven scientific
                  methods.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
                    Memory Training
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
                    Focus Techniques
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
                    Speed Learning
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Technology Integration */}
            <div className="flex  flex-col lg:flex-row-reverse items-center gap-16 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl  group-hover:shadow-3xl transition-all duration-700 p-10">
                  <img
                    src="./bot.gif"
                    alt="AI Technology"
                    className="w-64 h-64 object-contain mx-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <FaCog className="text-3xl text-purple-400 animate-spin-slow" />
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    2
                  </div>
                  <FaRocket className="text-4xl text-purple-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Technology Integration
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience the latest brain-computer interfaces and
                  neurotechnology that's revolutionizing human potential.
                  Interact with AI systems designed to enhance cognitive
                  abilities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors cursor-pointer">
                    Brain-Computer Interface
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors cursor-pointer">
                    AI Integration
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors cursor-pointer">
                    Neurofeedback
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Peak Performance */}
            <div className="flex flex-col lg:flex-row items-center gap-16 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
                    alt="Peak Performance"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaRocket className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    3
                  </div>
                  <FaRocket className="text-4xl text-green-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Peak Performance
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Master the mental frameworks used by elite athletes, CEOs, and
                  artists to achieve extraordinary results. Learn the psychology
                  of peak performance and flow states.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold hover:bg-green-200 transition-colors cursor-pointer">
                    Flow States
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold hover:bg-green-200 transition-colors cursor-pointer">
                    Mental Training
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold hover:bg-green-200 transition-colors cursor-pointer">
                    Performance Psychology
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 - Community Building */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 group">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-orange-50 to-red-50 p-10">
                  <img
                    src="./robot.gif"
                    alt="Community Building"
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <FaUsers className="text-3xl text-orange-400 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    4
                  </div>
                  <FaUsers className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Community Building
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Connect with like-minded individuals passionate about pushing
                  the boundaries of human cognition and achievement. Build
                  lasting relationships with innovators and thought leaders.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold hover:bg-orange-200 transition-colors cursor-pointer">
                    Networking
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold hover:bg-orange-200 transition-colors cursor-pointer">
                    Collaboration
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold hover:bg-orange-200 transition-colors cursor-pointer">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Mind Hack Competitive Revolution Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-fast"></div>
        </div>

        {/* Parallax Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://cdn.sanity.io/images/e7flbmx4/production/015c4741682f503670a5354c00147905ffd23a3a-4320x2862.webp')",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-purple-900/60 to-indigo-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <FaTrophy className="text-yellow-400 text-xl animate-pulse" />
              <span className="text-purple-200 font-semibold">
                COMPETITIVE REVOLUTION
              </span>
              <FaFire className="text-orange-400 text-xl animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                Mind Hack
              </span>
              <br />
              <span className="text-4xl md:text-5xl">
                Competitive Revolution
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Enter the ultimate cognitive battleground where the world's
              brightest minds compete in revolutionary brain-powered challenges
              that will redefine human potential.
            </p>
          </div>

          {/* Competition Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: FaGamepad,
                title: "Neural Gaming Arena",
                description:
                  "Compete in mind-controlled games that push the boundaries of brain-computer interfaces",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-500/10 to-pink-500/10",
              },
              {
                icon: FaBrain,
                title: "Cognitive Speed Trials",
                description:
                  "Race against time in memory, pattern recognition, and problem-solving challenges",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: FaChartLine,
                title: "Innovation Hackathon",
                description:
                  "48-hour intensive where teams create breakthrough neurotechnology solutions",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-500/10 to-emerald-500/10",
              },
              {
                icon: FaRocket,
                title: "Peak Performance Trials",
                description:
                  "Test your limits in flow state challenges and mental endurance competitions",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-500/10 to-red-500/10",
              },
              {
                icon: FaUsers,
                title: "Team Synchrony Challenge",
                description:
                  "Collaborate using advanced brain-to-brain communication technologies",
                color: "from-indigo-500 to-purple-500",
                bgColor: "from-indigo-500/10 to-purple-500/10",
              },
              {
                icon: FaTrophy,
                title: "Grand Championship",
                description:
                  "The ultimate showdown combining all disciplines for the Mind Hack crown",
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-500/10 to-orange-500/10",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Competition Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                number: "$100K+",
                label: "Prize Pool",
                color: "from-yellow-400 to-orange-500",
              },
              {
                number: "1000+",
                label: "Global Competitors",
                color: "from-purple-400 to-pink-500",
              },
              {
                number: "72",
                label: "Hours of Competition",
                color: "from-blue-400 to-cyan-500",
              },
              {
                number: "15",
                label: "Challenge Categories",
                color: "from-green-400 to-emerald-500",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center justify-center gap-3">
                  <FaTrophy className="group-hover:animate-bounce" />
                  Join the Competition
                  <FaFire className="group-hover:animate-pulse" />
                </span>
              </button>
              <button className="group border-2 border-purple-400 text-purple-400 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-3">
                  <FaChartLine className="group-hover:animate-pulse" />
                  View Leaderboard
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Expert Speakers",
                color: "from-blue-500 to-blue-600",
                icon: FaBrain,
              },
              {
                number: "100+",
                label: "Interactive Workshops",
                color: "from-purple-500 to-purple-600",
                icon: FaCog,
              },
              {
                number: "5K+",
                label: "Global Attendees",
                color: "from-green-500 to-green-600",
                icon: FaUsers,
              },
              {
                number: "24",
                label: "Hours of Content",
                color: "from-orange-500 to-red-500",
                icon: FaRocket,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${stat.color} text-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105`}
              >
                <stat.icon className="text-3xl mb-4 mx-auto group-hover:animate-pulse" />
                <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Sponsors Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
                  src={sponsor || "/placeholder.svg?height=64&width=150"}
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
            transform: `translateY(${-scrollY * 0.1}px)`,
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
              <div className="flex-1 relative group">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-12 pr-4 py-5 rounded-2xl border-0 focus:ring-4 focus:ring-blue-300/50 focus:outline-none bg-white/95 backdrop-blur-sm text-gray-900 text-lg transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Subscribe
                  <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(-8px) rotate(240deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          75% {
            transform: translateY(-5px) rotate(270deg);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          40% {
            transform: translateY(-18px) rotate(144deg);
          }
          80% {
            transform: translateY(-12px) rotate(288deg);
          }
        }

        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          60% {
            transform: translateY(-14px) rotate(216deg);
          }
        }

        @keyframes float-6 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          30% {
            transform: translateY(-16px) rotate(108deg);
          }
          70% {
            transform: translateY(-22px) rotate(252deg);
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

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-medium {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-1 {
          animation: float-1 7s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 8s ease-in-out infinite;
        }
        .animate-float-5 {
          animation: float-5 4s ease-in-out infinite;
        }
        .animate-float-6 {
          animation: float-6 9s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .duration-3000 {
          transition-duration: 3000ms;
        }
      `}</style>
    </div>
  );
};

export default Home;
