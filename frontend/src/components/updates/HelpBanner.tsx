import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const HelpBanner = () => {
  const features = [
    "Personalized college shortlisting",
    "Scholarship & loan assistance",
    "Documentation & verification help",
    "24/7 Priority chat support",
  ];

  return (
    <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#14B8A6] to-[#0F3D5E] p-5 sm:p-8 text-white shadow-lg sm:shadow-xl">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">
            Need Help With Admissions?
          </h3>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 sm:items-center sm:gap-3"
              >
                <FaCheckCircle className="mt-0.5 text-[#3EEAD8] sm:mt-0" />

                <p className="text-xs leading-5 text-white/90 sm:text-sm">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0F3D5E] transition hover:scale-105 sm:px-6 sm:py-3">
            Talk To Expert
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20 sm:px-6 sm:py-3">
            <FaWhatsapp />
            WhatsApp Support
          </button>

        </div>

      </div>
    </div>
  );
};

export default HelpBanner;