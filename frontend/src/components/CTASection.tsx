import { HiOutlineSparkles } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="bg-[#F8FAFC] py-8 md:py-12">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* CTA BOX */}
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0F3D5E] via-[#12476D] to-[#0F3D5E] px-6 py-14 text-center shadow-[0_20px_60px_rgba(15,61,94,0.18)] md:px-16 md:py-20">

          {/* Glow Effect */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#14B8A6]/20 blur-3xl" />

          {/* CONTENT */}
          <div className="relative z-10">

            {/* Heading */}
            <h2 className="section-title text-white">
              Start Your Journey With Confidence
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Join thousands of Nagpur students who trusted
              Future Star Foundation to shape their careers.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* Primary Button */}
              <button className="flex items-center gap-2 rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#ea580c]">

                <HiOutlineSparkles className="text-lg" />

                Get Admission Support
              </button>

              {/* Secondary Button */}
              <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">

                <FaWhatsapp className="text-lg" />

                WhatsApp Us
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;