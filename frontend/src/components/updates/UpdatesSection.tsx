// import UpdateCard from "./UpdateCard";
// import HelpBanner from "./HelpBanner";
// import { updates } from "./updatesData";
// import { HiArrowRight } from "react-icons/hi";

// const UpdatesSection = () => {
//   return (
//     <section className="bg-[#F8FAFC] py-12 md:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
//         {/* Heading */}

//         <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//           {/* Left Content */}
//           <div className="text-center md:text-left">
//             <h2 className="text-2xl font-bold text-[#0F3D5E] sm:text-3xl md:text-5xl">
//               Latest Admission Updates & Alerts
//             </h2>

//             <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base md:text-lg md:leading-8">
//               Stay ahead of deadlines with our real-time tracking of major
//               national and state-level examinations across India.
//             </p>
//           </div>

//           {/* Right Button */}
//           <div className="flex justify-center md:justify-end">
//             <button className="flex items-center justify-center gap-2 rounded-2xl border border-[#14B8A6]/30 px-6 py-4 font-semibold text-[#14B8A6] transition-all duration-300 hover:bg-[#14B8A6] hover:text-white">
//               View All Alerts
//               <HiArrowRight className="text-lg" />
//             </button>
//           </div>
//         </div>
//         {/* Cards */}
//         <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
//           {updates.slice(0, 4).map((update) => (
//             <UpdateCard
//               key={update.title}
//               category={update.category}
//               title={update.title}
//               description={update.description}
//               status={update.status}
//             />
//           ))}
//         </div>

//         {/* Help Banner */}
//         <div className="mt-10 md:mt-14">
//           <HelpBanner />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpdatesSection;

import UpdateCard from "./UpdateCard";
import HelpBanner from "./HelpBanner";
import { updates } from "./updatesData";
import { HiArrowRight } from "react-icons/hi";

const UpdatesSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* TOP SECTION */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="mb-5 inline-flex rounded-full bg-[#14B8A6]/10 px-4 py-2 text-sm font-semibold text-[#14B8A6]">
              Real-time Notifications
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#0F3D5E] sm:text-4xl md:text-5xl">
              Latest Admission Updates

              <span className="block text-[#14B8A6]">
                & Exam Alerts
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
              Stay updated with CET, NEET, MBA, BTech and
              admission deadlines across Maharashtra.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="md:pb-2">

            <button className="group flex items-center justify-center gap-2 rounded-2xl border border-[#14B8A6]/30 px-5 py-3 text-sm font-semibold text-[#14B8A6] transition-all duration-300 hover:bg-[#14B8A6] hover:text-white hover:shadow-lg">

              View All Alerts

              <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>
        </div>

        {/* UPDATE CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {updates.slice(0, 3).map((update) => (
            <UpdateCard
              key={update.title}
              category={update.category}
              title={update.title}
              description={update.description}
              status={update.status}
            />
          ))}
        </div>

        {/* HELP BANNER */}
        <div className="mt-10 md:mt-14">
          <HelpBanner />
        </div>

      </div>
    </section>
  );
};

export default UpdatesSection;