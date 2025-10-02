// src/components/blog/BlogCard.jsx
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <article className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#f0e6dc] hover:border-[#e8d5c4]">
      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f9f5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Image Container */}
        <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
          <div className="aspect-w-16 aspect-h-10 bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </Link>

        {/* Content */}
        <div className="p-7">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-[#7a6b63] mb-4 flex-wrap">
            <span className="flex items-center gap-2 bg-[#f9f5f0] px-3 py-1 rounded-full">
              <FaCalendarAlt className="text-[#9f7164] text-xs" />
              {new Date(post.publishDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2 bg-[#f9f5f0] px-3 py-1 rounded-full">
              <FaClock className="text-[#9f7164] text-xs" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <Link to={`/blog/${post.slug}`}>
            <h3 className="text-2xl font-serif font-light text-[#5a4a42] mb-4 group-hover:text-[#9f7164] transition-colors duration-300 leading-tight line-clamp-2">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-[#6d5b53] mb-6 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Category and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-[#f0e6dc]">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-gradient-to-r from-[#f9f5f0] to-[#e8d5c4] text-[#7a5a50] px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <Link
              to={`/blog/${post.slug}`}
              className="flex items-center gap-2 text-[#9f7164] font-medium hover:text-[#7a5a50] transition-all duration-300 group/cta"
            >
              Read More
              <FaArrowRight className="transform group-hover/cta:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#9f8e84] bg-white border border-[#e8d5c4] px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#9f7164] to-[#7a5a50] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
      </div>
    </article>
  );
}
