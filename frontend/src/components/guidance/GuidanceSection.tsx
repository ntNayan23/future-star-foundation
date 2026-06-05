import FeatureCard from "./FeatureCard";
import {
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineMap,
} from "react-icons/hi";

import counsellingImage from "../../assets/guidance-section-image.webp";

const GuidanceSection = () => {
  return (
    <section className="bg-white py-10 md:py-10 pt-10 pb-20">

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-12">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Image */}
          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <img
              src={counsellingImage}
              alt="Career Guidance"
              loading="lazy"
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Floating Success Card */}
          <div className="absolute -bottom-6 right-6 rounded-3xl bg-[#0F3D5E] px-8 py-6 text-white shadow-2xl">
            <h3 className="text-4xl font-bold">98%</h3>

            <p className="mt-1 text-sm text-white/70">
              Admission Success Rate
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Badge */}
          <div className="mb-5 inline-flex items-center rounded-full bg-[#F97316]/10 px-4 py-2 text-sm font-medium text-[#F97316]">
            Your Career, Our Mission
          </div>

          {/* Heading */}
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-[#0F3D5E] sm:text-4xl md:text-3xl">
            Strategic Guidance <span className="text-[#14B8A6]">For Your Career</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
            We combine deep local expertise with personalized
            mentorship to help every Nagpur student make
            confident, informed decisions about their future.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-5">

            <FeatureCard
              icon={<HiOutlineAcademicCap />}
              title="Personalized Mentorship"
              description="One-on-one guidance tailored to your goals and aptitude."
              iconBg="bg-[#14B8A6]/10"
              iconColor="text-[#14B8A6]"
            />

            <FeatureCard
              icon={<HiOutlineShieldCheck />}
              title="Verified Admissions"
              description="100% genuine, transparent admission processes only."
              iconBg="bg-[#0F3D5E]/10"
              iconColor="text-[#0F3D5E]"
            />

            <FeatureCard
              icon={<HiOutlineMap />}
              title="Career Roadmap"
              description="A clear, step-by-step path from admission to career."
              iconBg="bg-[#F97316]/10"
              iconColor="text-[#F97316]"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;