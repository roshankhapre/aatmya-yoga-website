// src/components/sections/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHome, FaArrowLeft, FaSearch, FaEnvelope } from "react-icons/fa";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found - Aatmya Yoga Indore</title>
        <meta
          name="description"
          content="Page not found at Aatmya Yoga. Explore our yoga teacher training, children's yoga programs, teen yoga classes in Indore, and wellness workshops."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.aatmyayoga.com/404" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Graphic */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <div className="text-6xl font-serif text-[#9f7164] font-bold">
                404
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6">
            Page Not Found
          </h1>

          <p className="text-xl text-[#7a6b63] mb-8 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's help you find your
            way back to yoga.
          </p>

          {/* Quick Links to Important Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
            {[
              { path: "/", label: "Home", icon: FaHome },
              { path: "/programs", label: "Programs", icon: FaSearch },
              {
                path: "/children-yoga-training",
                label: "Kids Yoga",
                icon: FaSearch,
              },
              {
                path: "/teen-yoga-training",
                label: "Teen Yoga",
                icon: FaSearch,
              },
              {
                path: "/teacher-training",
                label: "Teacher Training",
                icon: FaSearch,
              },
              { path: "/contact", label: "Contact", icon: FaEnvelope },
            ].map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-3 px-4 py-3 bg-white/80 rounded-xl border border-[#e8d5c4] hover:border-[#9f7164] hover:shadow-md transition-all duration-300 group"
              >
                <Icon className="text-[#9f7164] text-sm" />
                <span className="text-[#5a4a42] group-hover:text-[#9f7164] transition-colors">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white px-8 py-4 rounded-2xl font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaHome />
              Back to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 bg-white border border-[#e8d5c4] text-[#5a4a42] px-8 py-4 rounded-2xl font-medium hover:border-[#9f7164] hover:shadow-lg transition-all duration-300"
            >
              <FaArrowLeft />
              Go Back
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white/80 rounded-2xl p-6 border border-[#e8d5c4] max-w-md mx-auto">
            <div className="flex items-center gap-3 text-[#7a6b63] mb-3">
              <FaSearch className="text-[#9f7164]" />
              <span className="font-medium">
                Looking for something specific?
              </span>
            </div>
            <p className="text-sm text-[#6d5b53]">
              Try our{" "}
              <Link to="/programs" className="text-[#9f7164] hover:underline">
                programs page
              </Link>{" "}
              or{" "}
              <Link to="/blog" className="text-[#9f7164] hover:underline">
                blog
              </Link>{" "}
              to find what you need.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
