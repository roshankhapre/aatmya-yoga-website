import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5]">
      {/* SEO Meta */}
      <Helmet>
        <title>404 | Page Not Found - Aatmya Yoga</title>
        <meta
          name="description"
          content="Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Return to Aatmya Yoga homepage or contact us."
        />
      </Helmet>

      <div className="text-center px-6">
        {/* Big Error Code */}
        <h1 className="text-[8rem] md:text-[12rem] font-bold text-[#c8a798] drop-shadow-lg">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-serif text-[#5a4a42] mb-4">
          Oops! Page not found
        </h2>
        <p className="text-[#7a6b63] max-w-lg mx-auto mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Search Box */}

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            aria-label="Go back to homepage"
            className="px-6 py-3 rounded-xl bg-[#c8a798] text-white font-medium hover:bg-[#b28b78] transition-all shadow-md"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            aria-label="Go to contact page"
            className="px-6 py-3 rounded-xl border border-[#c8a798] text-[#5a4a42] font-medium hover:bg-[#f1e6df] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Optional: Analytics Tracking */}
      <script>
        {`
          if (window.gtag) {
            gtag('event', 'page_view', {
              page_title: '404 Page Not Found',
              page_path: window.location.pathname,
            });
          }
        `}
      </script>
    </section>
  );
}
