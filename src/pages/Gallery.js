"use client";

import { useState, useEffect } from "react";
import {
  FaTimes,
  FaExpand,
  FaHeart,
  FaShare,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setStoreReduxGallery } from "../reducer/gallerySlice";
import axios from "axios";

const Gallery = () => {
  const backend_domain_name =
    "http://mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const [loading, setLoading] = useState(false);
  const reduxGallery = useSelector((store) => store.gallery);
  const dispatch = useDispatch();
  const [isServerError, setIsServerError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollY, setScrollY] = useState(0);

  const categories = [
    { id: "all", name: "All", count: 12 },
    { id: "Workshops", name: "Workshops", count: 4 },
    { id: "Networking", name: "Networking", count: 3 },
    { id: "Speakers", name: "Speakers", count: 3 },
    { id: "Innovation", name: "Innovation", count: 2 },
  ];

  const [galleryImages, setGalleryImages] = useState(reduxGallery.gallery);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.type === selectedCategory);

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

      const response = await axios.get(`${backend_domain_name}/api/gallery`);

      if (response.status == 200) {
        console.log(galleryImages);
        setGalleryImages(response.data.data);
        dispatch(setStoreReduxGallery(response.data.data));
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
      <section className="relative h-96 bg-gradient-to-br from-green-500 via-blue-600 to-purple-700 flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/50 via-blue-600/40 to-purple-700/50"></div>

        <div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Capturing moments of innovation, learning, and transformation
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Gallery
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore highlights from our transformative events, workshops, and
              community gatherings
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={
                      image.gallery
                        ? `${backend_domain_name}/storage/app/public/${image.gallery}`
                        : "/placeholder.svg"
                    }
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on Hover */}

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {image.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {image.description}
                  </p>

                  {/* Stats */}
                  {/* <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{image.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaHeart />
                        <span>{image.likes}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Details
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <FaTimes size={20} />
            </button>

            {/* Action Buttons */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <FaHeart size={16} />
              </button>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <FaShare size={16} />
              </button>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <FaDownload size={16} />
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-8 rounded-b-lg">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      {selectedImage.title}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      {selectedImage.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm">
                      {/* <div className="flex items-center gap-2">
                        <FaEye />
                        <span>{selectedImage.views} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaHeart />
                        <span>{selectedImage.likes} likes</span>
                      </div> */}
                      <span className="bg-white/20 px-3 py-1 rounded-full capitalize">
                        {selectedImage.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all">
                      Share
                    </button>
                    <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
