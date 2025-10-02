// src/components/blog/BlogList.jsx
import { useState } from "react";
import { blogPosts } from "../../data/blogData";
import BlogCard from "./BlogCard";
import PageMeta from "../seo/PageMeta";

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Aatmya Yoga Blog - Yoga Tips, Training & Wellness",
    description:
      "Expert yoga articles, teacher training guides, and wellness tips from Aatmya Yoga.",
    url: "https://www.aatmyayoga.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Aatmya Yoga",
    },
  };

  return (
    <>
      <PageMeta
        title="Yoga Blog - Expert Tips, Teacher Training & Wellness | Aatmya Yoga"
        description="Read expert articles on yoga for children, teens, teacher training certification, and wellness tips."
        canonical="https://www.aatmyayoga.com/blog"
        schema={blogSchema}
      />

      <section className="min-h-screen bg-gradient-to-br from-[#fefcf8] via-[#f9f5f0] to-[#f1e8e0] py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#e8d5c8] rounded-full opacity-[0.03] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d8c3b6] rounded-full opacity-[0.02] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-[#9f7164] text-sm uppercase tracking-wider font-medium mb-6">
              <div className="w-8 h-px bg-[#9f7164] opacity-60"></div>
              Blog & Resources
              <div className="w-8 h-px bg-[#9f7164] opacity-60"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-[#5a4a42] mb-6 leading-tight">
              Yoga Wisdom &<br />
              Insights
            </h1>
            <p className="text-xl text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
              Discover expert guidance, yoga practices, and transformative
              insights for your wellness journey
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-white/80 backdrop-blur-sm border border-[#e8d5c4] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9f7164]/20 focus:border-[#9f7164] text-[#5a4a42] placeholder-[#9f8e84] transition-all duration-300"
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#9f8e84]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white shadow-lg shadow-[#9f7164]/25"
                      : "bg-white/80 backdrop-blur-sm text-[#5a4a42] border border-[#e8d5c4] hover:border-[#9f7164] hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-[#7a6b63]">
              Showing {filteredPosts.length} of {blogPosts.length} articles
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="transform transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#f9f5f0] to-[#e8d5c4] rounded-full flex items-center justify-center">
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
              <h3 className="text-2xl font-serif text-[#5a4a42] mb-3">
                No articles found
              </h3>
              <p className="text-[#7a6b63] max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're
                looking for.
              </p>
            </div>
          )}

          {/* Enhanced Newsletter CTA */}
          <div className="bg-gradient-to-br from-white to-[#f9f5f0] rounded-3xl p-10 shadow-xl border border-[#e8d5c4]/30 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#9f7164] to-[#7a5a50] rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-[#5a4a42] mb-4">
                Join Our Yoga Community
              </h3>
              <p className="text-[#6d5b53] text-lg mb-8 leading-relaxed">
                Receive weekly insights on yoga practices, mindfulness
                techniques, and exclusive updates on workshops and teacher
                training programs.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white border border-[#e8d5c4] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9f7164]/20 focus:border-[#9f7164] text-[#5a4a42] placeholder-[#9f8e84] transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#9f7164] to-[#7a5a50] text-white px-8 py-4 rounded-2xl font-medium hover:shadow-xl hover:shadow-[#9f7164]/25 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-[#9f8e84] mt-4">
                No spam, unsubscribe at any time
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
