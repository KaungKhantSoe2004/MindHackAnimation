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
} from "react-icons/fa";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What is Mind Hack and how does it work?",
      answer:
        "Mind Hack is a revolutionary program that combines neuroscience, technology, and personal development to unlock your brain's full potential. We use evidence-based techniques including neurofeedback, brain training exercises, and cognitive enhancement protocols to help you improve memory, focus, creativity, and overall mental performance.",
    },
    {
      id: 2,
      question: "Who can benefit from Mind Hack programs?",
      answer:
        "Our programs are designed for anyone looking to enhance their cognitive abilities, from students and professionals to athletes and entrepreneurs. Whether you're seeking to improve focus, boost creativity, enhance memory, or achieve peak performance, Mind Hack offers tailored solutions for all skill levels and backgrounds.",
    },
    {
      id: 3,
      question: "Is Mind Hack scientifically proven?",
      answer:
        "Yes, our methodologies are based on peer-reviewed neuroscience research and clinical studies. We collaborate with leading universities and research institutions to ensure our techniques are scientifically validated. Our programs have shown measurable improvements in cognitive performance across thousands of participants.",
    },
    {
      id: 4,
      question: "What types of programs do you offer?",
      answer:
        "We offer various programs including intensive workshops, online courses, certification programs, and personalized coaching sessions. Our offerings range from beginner-friendly introductory courses to advanced neurofeedback training and professional certification programs for coaches and trainers.",
    },
    {
      id: 5,
      question: "How long does it take to see results?",
      answer:
        "Many participants notice improvements within the first few sessions, with significant changes typically occurring within 4-6 weeks of consistent practice. However, results vary based on individual goals, commitment level, and the specific techniques being used. Long-term benefits continue to develop over months of practice.",
    },
    {
      id: 6,
      question: "Do I need any special equipment or technology?",
      answer:
        "For basic programs, no special equipment is required. However, our advanced programs may utilize neurofeedback devices, EEG headsets, or specialized software. We provide all necessary equipment during in-person sessions and offer rental options for home practice with advanced technologies.",
    },
    {
      id: 7,
      question:
        "What is neurofeedback and how does it enhance cognitive performance?",
      answer:
        "Neurofeedback is a non-invasive technique that provides real-time feedback about brain activity, allowing you to learn how to optimize your brainwave patterns. By training specific brainwave frequencies, you can improve focus, reduce stress, enhance creativity, and achieve peak mental states more consistently.",
    },
    {
      id: 8,
      question: "How does your brain-computer interface technology work?",
      answer:
        "Our proprietary MindSync™ technology uses advanced EEG sensors to monitor brain activity and provide personalized training protocols. The system adapts in real-time to your brain's responses, creating customized exercises that target your specific cognitive enhancement goals while ensuring optimal learning efficiency.",
    },
    {
      id: 9,
      question: "Can I become a certified Mind Hack trainer?",
      answer:
        "Yes! Our comprehensive certification program trains individuals to become qualified Mind Hack practitioners. The program includes theoretical foundations, hands-on training, supervised practice sessions, and ongoing mentorship. Certified trainers join our global network and receive continued education and support.",
    },
    {
      id: 10,
      question: "Is there ongoing support and community access?",
      answer:
        "All participants gain access to our exclusive online community, monthly group sessions, resource library, and ongoing support from our team of experts. We also host regular virtual meetups, advanced workshops, and annual conferences to keep you connected and continuously learning.",
    },
    {
      id: 11,
      question: "What are the costs involved in Mind Hack programs?",
      answer:
        "Our programs range from free introductory workshops to comprehensive certification courses. Basic online courses start at $99, intensive workshops range from $299-$599, and our full certification program is $2,999. We also offer payment plans and scholarships for qualifying participants.",
    },
    {
      id: 12,
      question: "Are there any age restrictions for participation?",
      answer:
        "Mind Hack programs are suitable for participants aged 16 and above. For participants under 18, we require parental consent. Our techniques are safe and effective for all adult age groups, and we have specialized programs designed for different life stages and cognitive goals.",
    },
  ];

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
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group-hover:bg-gray-50/50"
                >
                  <h4 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-teal-600 transition-colors">
                    {faq.question}
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
                      {faq.answer}
                    </p>
                    {/* <button className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2">
                      <FaLightbulb size={14} />
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
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
