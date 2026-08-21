import FloatingCard from "./FloatingCard";
import StatsStrip from "./StatsStrip";
import { FaUserGraduate } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import college from "../../assets/hero-section-image.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0F3D5E] to-[#14B8A6] pt-24 text-white md:pt-28">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-8 px-5 pb-8 lg:min-h-[calc(100vh-88px)] lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* LEFT CONTENT */}
        <div>
          <div className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur-md">
            <HiLocationMarker className="text-[#3EEAD8]" />
            Nagpur & Maharashtra's Trusted Admission Partner
          </div>

          <h1 className="max-w-lg text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4rem]">
            Helping Nagpur Students Build{" "}
            <span className="text-[#3EEAD8]">Successful Careers</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.6] text-white/80 sm:text-lg">
            Personalized counselling for MBBS, MBA, BTech, BAMS, BPT, and career
            guidance for students across Nagpur & Maharashtra.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-[#F97316] px-6 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#ea580c] hover:shadow-orange-500/30 sm:px-8 sm:py-4">
              Book Free Counselling
            </button>

            <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:px-8 sm:py-4">
              Explore Courses
            </button>
          </div>

          {/* Mobile Student Count */}
          {/* <div className="mt-6 flex items-center gap-3 text-sm md:hidden">
            <FaUserGraduate className="text-xl text-[#3EEAD8]" />
            <span className="text-white/90">
              5000+ Students Guided Across Maharashtra
            </span>
          </div> */}
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex items-center justify-center">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 shadow-2xl md:rounded-[32px]">
            <div className="absolute inset-0 h-[400px] w-[400px] rounded-full bg-[#14B8A6]/10 blur-3xl" />

            <img
              src={college}
              alt="Students"
               loading="lazy"
              className="h-[250px] w-full max-w-[520px] object-cover sm:h-[350px] lg:h-[420px]"
            />

            <div className="absolute inset-0 bg-[#0F3D5E]/20" />
          </div>

          {/* Floating Card 1 */}
          <FloatingCard
            title="5000+"
            subtitle="Students Guided"
            className="left-2 top-6 scale-75 md:-left-6 md:top-10 md:scale-100"
            direction="up"
            iconColor="bg-[#14B8A6]/10 text-[#14B8A6]"
            icon={<FaUserGraduate />}
          />

          {/* Floating Card 2 */}
          <FloatingCard
            title="Verified Admissions"
            subtitle="Trusted Support"
            className="bottom-4 right-2 scale-75 md:-right-8 md:bottom-10 md:scale-100"
            direction="down"
            duration={5}
            icon={<MdVerified />}
            iconColor="bg-[#F97316]/10 text-[#F97316]"
          />
        </div>
      </div>

      <StatsStrip />
    </section>
  );
};

export default Hero;
