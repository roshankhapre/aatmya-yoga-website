// src/components/blog/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaArrowLeft,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBookmark,
  FaArrowRight,
  FaQuoteLeft,
  FaLightbulb,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import PageMeta from "../seo/PageMeta";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      const bookmarks = JSON.parse(
        localStorage.getItem("blogBookmarks") || "[]"
      );
      setIsBookmarked(bookmarks.includes(post.id));

      // Initialize like count (in real app, this would come from backend)
      setLikeCount(Math.floor(Math.random() * 50) + 10);
    }
  }, [slug, post]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("blogBookmarks") || "[]");
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id) => id !== post.id);
      localStorage.setItem("blogBookmarks", JSON.stringify(newBookmarks));
    } else {
      const newBookmarks = [...bookmarks, post.id];
      localStorage.setItem("blogBookmarks", JSON.stringify(newBookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const shareUrl = `https://www.aatmyayoga.com/blog/${post.slug}`;

  // Enhanced content styling with custom components
  const EnhancedContent = ({ content }) => {
    // Process content to add enhanced styling
    const processedContent = content
      .replace(/<h2>/g, '<h2 class="enhanced-heading enhanced-h2">')
      .replace(/<h3>/g, '<h3 class="enhanced-heading enhanced-h3">')
      .replace(/<p>/g, '<p class="enhanced-paragraph">')
      .replace(/<ul>/g, '<ul class="enhanced-list">')
      .replace(/<blockquote>/g, '<blockquote class="enhanced-quote">')
      .replace(/<strong>/g, '<strong class="enhanced-strong">');

    return (
      <div
        className="enhanced-content"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fefcf8] to-[#f1e8e0] flex items-center justify-center ">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] rounded-3xl flex items-center  justify-center">
            <svg
              className="w-10 h-10 text-[#9f8e84]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-4">
            Article Not Found
          </h1>
          <p className="text-[#7a6b63] mb-6 max-w-md">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white px-8 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageMeta
        title={post.seo.title}
        description={post.seo.description}
        canonical={`https://www.aatmyayoga.com/blog/${post.slug}`}
      />

      <article className="min-h-screen bg-gradient-to-br from-[#fefcf8] via-white to-[#f9f5f0]">
        {/* Enhanced Navigation */}
        <nav className="border-b border-[#e8d5c4]/30 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 text-[#7a6b63] hover:text-[#5a4a42] transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-[#f9f5f0] rounded-full flex items-center justify-center group-hover:bg-[#e8d5c4] transition-colors">
                  <FaArrowLeft className="text-sm" />
                </div>
                <span>Back to Blog</span>
              </Link>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleLike}
                  className="flex items-center gap-2 text-[#7a6b63] hover:text-[#9f7164] transition-colors"
                >
                  {isLiked ? (
                    <FaHeart className="text-[#9f7164]" />
                  ) : (
                    <FaRegHeart />
                  )}
                  <span className="text-sm">{likeCount}</span>
                </button>
                <button
                  onClick={toggleBookmark}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isBookmarked
                      ? "text-[#9f7164] bg-[#f9f5f0]"
                      : "text-[#7a6b63] hover:text-[#9f7164] hover:bg-[#f9f5f0]"
                  }`}
                >
                  <FaBookmark />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative">
          {/* Featured Image */}
          <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Article Header Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pb-16 pt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <div className="flex flex-wrap gap-4 text-sm mb-6">
                  <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaCalendarAlt />
                    {new Date(post.publishDate).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaClock />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaUser />
                    {post.author}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#9f7164] text-white px-5 py-2.5 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {/* Key Takeaways */}
              <div className="bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] rounded-3xl p-8 mb-12 border border-[#e8d5c4]/50">
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-2xl text-[#9f7164]" />
                  <h3 className="text-2xl font-serif text-[#5a4a42]">
                    Key Takeaways
                  </h3>
                </div>
                <ul className="space-y-3 text-[#6d5b53]">
                  {post.excerpt
                    .split(". ")
                    .slice(0, 3)
                    .map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9f7164] rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          {point
                            .replace("Discover", "Learn")
                            .replace("how", "the ways")}
                          .
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Enhanced Content */}
              <div className="enhanced-blog-content">
                <EnhancedContent content={post.content} />
              </div>

              {/* Action Section */}
              <div className="mt-12 pt-8 border-t border-[#e8d5c4]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={toggleLike}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                        isLiked
                          ? "bg-[#9f7164] text-white shadow-lg"
                          : "bg-[#f9f5f0] text-[#7a6b63] hover:bg-[#e8d5c4]"
                      }`}
                    >
                      {isLiked ? <FaHeart /> : <FaRegHeart />}
                      <span>
                        {likeCount} {isLiked ? "Liked" : "Likes"}
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#7a6b63] text-sm">
                      Found this helpful?
                    </span>
                    <div className="flex gap-2">
                      {["👍", "❤️", "👏", "🎯"].map((emoji, index) => (
                        <button
                          key={index}
                          className="w-10 h-10 bg-white border border-[#e8d5c4] rounded-xl hover:border-[#9f7164] transition-colors duration-200 flex items-center justify-center text-lg"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              {/* Author Bio */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e8d5c4]/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9f7164] to-[#7a5a50] rounded-full flex items-center justify-center text-white text-xl font-serif mx-auto mb-4">
                    AY
                  </div>
                  <h4 className="font-serif text-lg text-[#5a4a42] mb-2">
                    {post.author}
                  </h4>
                  <p className="text-[#6d5b53] text-sm leading-relaxed">
                    Certified yoga instructor and wellness expert with years of
                    experience in teaching and mentoring.
                  </p>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e8d5c4]/30">
                <h4 className="font-serif text-lg text-[#5a4a42] mb-4 flex items-center gap-2">
                  <FaShareAlt className="text-[#9f7164]" />
                  Share this article
                </h4>
                <div className="flex gap-3">
                  {[
                    {
                      icon: FaFacebook,
                      color: "hover:bg-[#1877f2] hover:text-white",
                      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        shareUrl
                      )}`,
                    },
                    {
                      icon: FaTwitter,
                      color: "hover:bg-[#1da1f2] hover:text-white",
                      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title
                      )}&url=${encodeURIComponent(shareUrl)}`,
                    },
                    {
                      icon: FaLinkedin,
                      color: "hover:bg-[#0a66c2] hover:text-white",
                      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        shareUrl
                      )}`,
                    },
                  ].map(({ icon: Icon, color, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-[#f9f5f0] rounded-xl flex items-center justify-center text-[#7a6b63] transition-all duration-300 hover:scale-110 ${color}`}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Reading Progress */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e8d5c4]/30">
                <h4 className="font-serif text-lg text-[#5a4a42] mb-4">
                  Reading Progress
                </h4>
                <div className="w-full bg-[#f9f5f0] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#9f7164] to-[#7a5a50] h-2 rounded-full transition-all duration-1000"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="text-[#6d5b53] text-sm mt-2 text-center">
                  65% completed
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif text-[#5a4a42] mb-4">
                Continue Your Journey
              </h3>
              <p className="text-[#7a6b63] text-lg max-w-2xl mx-auto">
                Explore more insights and guidance to deepen your yoga practice
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block bg-white rounded-3xl p-8 shadow-lg border border-[#e8d5c4]/30 hover:shadow-2xl hover:border-[#9f7164]/30 transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-[#f9f5f0] to-[#e8d5c4] text-[#7a5a50] px-4 py-2 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-[#9f8e84] text-sm">
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h4 className="text-2xl font-serif text-[#5a4a42] group-hover:text-[#9f7164] transition-colors mb-4 leading-tight">
                      {relatedPost.title}
                    </h4>
                    <p className="text-[#7a6b63] leading-relaxed mb-6 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#9f8e84]">
                        {new Date(relatedPost.publishDate).toLocaleDateString(
                          "en-IN",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[#9f7164] font-medium group-hover:gap-3 transition-all duration-300">
                        Read More
                        <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .enhanced-blog-content {
          font-family: "Inter", system-ui, -apple-system, sans-serif;
        }

        .enhanced-heading {
          position: relative;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          scroll-margin-top: 2rem;
        }

        .enhanced-h2 {
          font-size: 2rem;
          font-weight: 300;
          color: #5a4a42;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e8d5c4;
        }

        .enhanced-h2::before {
          content: "";
          position: absolute;
          left: -1rem;
          top: 0;
          bottom: 0.5rem;
          width: 4px;
          background: linear-gradient(to bottom, #9f7164, #7a5a50);
          border-radius: 2px;
        }

        .enhanced-h3 {
          font-size: 1.5rem;
          font-weight: 400;
          color: #7a6359;
          margin-top: 2.5rem;
          padding-left: 1rem;
          border-left: 3px solid #e8d5c4;
        }

        .enhanced-paragraph {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #6d5b53;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .enhanced-list {
          margin: 2rem 0;
          padding-left: 0;
        }

        .enhanced-list li {
          position: relative;
          padding: 0.75rem 0 0.75rem 2.5rem;
          margin-bottom: 0.5rem;
          background: #f9f5f0;
          border-radius: 0.75rem;
          border-left: 4px solid #9f7164;
        }

        .enhanced-list li::before {
          content: "✓";
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9f7164;
          font-weight: bold;
        }

        .enhanced-quote {
          background: linear-gradient(135deg, #f9f5f0, #e8d5c4);
          border-left: 4px solid #9f7164;
          padding: 2rem;
          margin: 2.5rem 0;
          border-radius: 1rem;
          position: relative;
          font-style: italic;
        }

        .enhanced-quote::before {
          content: '"';
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          font-size: 4rem;
          color: #9f7164;
          opacity: 0.2;
          font-family: serif;
        }

        .enhanced-strong {
          color: #5a4a42;
          font-weight: 600;
          background: linear-gradient(120deg, #f9f5f0 0%, #f9f5f0 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.2em;
          background-position: 0 88%;
          padding: 0.1em 0.2em;
          border-radius: 0.25em;
        }

        @media (max-width: 768px) {
          .enhanced-h2 {
            font-size: 1.75rem;
          }

          .enhanced-h3 {
            font-size: 1.25rem;
          }

          .enhanced-paragraph {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
