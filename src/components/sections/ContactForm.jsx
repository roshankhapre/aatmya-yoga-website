export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#f9f5f0] to-[#e8dfd5] relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-100/10 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-teal-100/10 blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a4a42] mb-6 tracking-wide">
            Connect with Peace
          </h2>
          <p className="text-lg text-[#7a6b63] max-w-2xl mx-auto leading-relaxed">
            Share your journey with us. Whether you have questions or simply
            wish to connect, we're here to listen with an open heart.
          </p>
          <div className="w-24 h-px bg-[#c8a798] opacity-50 mx-auto mt-8"></div>
        </div>

        {/* Form + Info */}
        <div className="grid md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-white/30">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-light text-[#5a4a42]">
              Gentle Guidance
            </h3>
            <p className="text-[#6d5b53] leading-relaxed">
              Our team responds with compassion and wisdom. Allow us to support
              your yoga journey with personalized attention.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-[#e8d5c4] p-2 rounded-full text-[#7a6359] mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#5a4a42] mb-1">Email Us</h4>
                  <a
                    href="mailto:yogasteni@gmail.com"
                    className="text-[#7a6359] hover:text-[#9f7164] transition-colors duration-300"
                  >
                    yogasteni@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-[#e8d5c4] p-2 rounded-full text-[#7a6359] mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#5a4a42] mb-1">Call Us</h4>
                  <a
                    href="tel:+918281094117"
                    className="text-[#7a6359] hover:text-[#9f7164] transition-colors duration-300"
                  >
                    +91 82810 94117
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I would like to say: ${message}`;
              const whatsappURL = `https://wa.me/918281094117?text=${encodeURIComponent(
                whatsappMessage
              )}`;

              window.open(whatsappURL, "_blank");
            }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-lg border border-[#d8c3b6] focus:outline-none focus:ring-1 focus:ring-[#9f7164] focus:border-[#9f7164] bg-white/90 text-[#5a4a42] placeholder-[#b7a9a0] font-light transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-lg border border-[#d8c3b6] focus:outline-none focus:ring-1 focus:ring-[#9f7164] focus:border-[#9f7164] bg-white/90 text-[#5a4a42] placeholder-[#b7a9a0] font-light transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-5 py-3 rounded-lg border border-[#d8c3b6] focus:outline-none focus:ring-1 focus:ring-[#9f7164] focus:border-[#9f7164] bg-white/90 text-[#5a4a42] placeholder-[#b7a9a0] font-light transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#9f7164] to-[#7a5a50] hover:from-[#8b6358] hover:to-[#6d4f46] text-white py-3 rounded-full font-light tracking-wide shadow-sm hover:shadow-md transition-all duration-500 transform hover:scale-[1.02]"
            >
              Send
            </button>
          </form>
        </div>

        {/* Decorative center divider */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
          <div className="w-3 h-3 border border-[#c8a798] rounded-full opacity-50"></div>
          <div className="w-24 h-px bg-[#c8a798] opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
