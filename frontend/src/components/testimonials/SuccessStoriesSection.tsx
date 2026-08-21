import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const SuccessStoriesSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-10 md:py-12 ">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* TOP CONTENT */}
        <div className="text-center">

          {/* Badge */}
          <div className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F97316]/10  px-4 py-2 text-[#F97316]">
            <HiOutlineChatAlt2 />
            Success Stories
          </div>

          {/* Heading */}
          <h2 className="section-title mt-5 text-[#0F3D5E]">
            Stories of Ambition {" "}
            <span className="text-[#14B8A6]">& Achievement</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            Real student journeys guided by Future Star Foundation
            towards successful admissions and brighter careers.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              course={item.course}
              message={item.message}
              image={item.image}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;