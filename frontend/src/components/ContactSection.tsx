import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">

            {/* LEFT SIDE */}
            <div className="bg-[#0F3D5E] px-8 py-12 text-white md:px-12">

              {/* Heading */}
              <h2 className="text-4xl font-bold leading-tight">
                Get In Touch
              </h2>

              {/* Description */}
              <p className="mt-6 text-base leading-8 text-white/70">
                Have questions about specific colleges or
                cutoffs? Reach out to our expert team today.
              </p>

              {/* CONTACT ITEMS */}
              <div className="mt-10 space-y-8">

                {/* PHONE */}
                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#14B8A6]">
                    <HiOutlinePhone />
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-wide text-[#14B8A6]">
                      PHONE
                    </p>

                    <h4 className="mt-1 text-xl font-semibold">
                      +91 98765 43210 / 
                    </h4>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#14B8A6]">
                    <HiOutlineMail />
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-wide text-[#14B8A6]">
                      EMAIL
                    </p>

                    <h4 className="mt-1 text-xl font-semibold">
                      contact@futurestar.org
                    </h4>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#14B8A6]">
                    <HiOutlineLocationMarker />
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-wide text-[#14B8A6]">
                      ADDRESS
                    </p>

                    <h4 className="mt-1 max-w-xs text-xl font-semibold leading-8">
                      Plot 24, Educational Hub,
                      Ramdaspeth, Nagpur - 440010
                    </h4>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-12 border-t border-white/10" />

              {/* SOCIALS */}
              <div className="mt-10 flex items-center gap-4">

                {[
                  <FaFacebookF />,
                  <FaInstagram />,
                  <FaTwitter />,
                  <FaYoutube />,
                ].map((icon, index) => (
                  <button
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]"
                  >
                    {icon}
                  </button>
                ))}

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="px-8 py-12 md:px-12">

              {/* Heading */}
              <h3 className="text-4xl font-bold text-[#0F3D5E]">
                Book A Consultation
              </h3>

              {/* FORM */}
              <form className="mt-10">

                {/* ROW */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-600">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 outline-none transition-all duration-300 focus:border-[#14B8A6]"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-600">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your number"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 outline-none transition-all duration-300 focus:border-[#14B8A6]"
                    />
                  </div>
                </div>

                {/* COURSE */}
                <div className="mt-6">

                  <label className="mb-3 block text-sm font-medium text-gray-600">
                    Interested Course
                  </label>

                  <input
                    type="text"
                    placeholder="Which course are you interested in?"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 outline-none transition-all duration-300 focus:border-[#14B8A6]"
                  />
                </div>

                {/* MESSAGE */}
                <div className="mt-6">

                  <label className="mb-3 block text-sm font-medium text-gray-600">
                    Your Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all duration-300 focus:border-[#14B8A6]"
                  />
                </div>

                {/* BUTTON */}
                <button className="mt-8 h-14 w-full rounded-2xl bg-[#F97316] text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#ea580c]">
                  Submit Request
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;