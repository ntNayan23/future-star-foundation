import ProcessStep from "./ProcessStep";
import { processSteps } from "./processData";
import { HiOutlineCog } from "react-icons/hi";

const ProcessSection = () => {
  return (
    <section className="bg-white py-16 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* TOP CONTENT */}
        <div className="text-center">
          {/* Badge */}
          <div className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#14B8A6]/10 px-4 py-2 text-[#14B8A6]">
            <HiOutlineCog />
            How It Works
          </div>

          {/* Heading */}
          <h2 className="section-title mt-5 text-[#0F3D5E]">
            Our Strategic <span className="text-[#14B8A6]">Process</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            We don't just fill forms — we build futures. Our structured
            admission process ensures clarity, confidence, and complete support.
          </p>
        </div>

        {/* PROCESS TIMELINE */}
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-[10%] right-[10%] top-11 hidden h-[3px] bg-gradient-to-r from-[#0F3D5E] via-[#14B8A6] to-[#F97316] lg:block" />
          {/* Steps */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {processSteps.map((item) => (
              <ProcessStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
