import UpdateCard from "./UpdateCard";
import HelpBanner from "./HelpBanner";
import { updates } from "./updatesData";

const UpdatesSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0F3D5E] sm:text-3xl md:text-5xl">
            Latest Admission Updates & Alerts
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base md:mt-5 md:text-lg md:leading-8">
            Stay ahead of deadlines with our real-time tracking of major national and state-level examinations across India.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {updates.map((update) => (
            <UpdateCard
              key={update.title}
              category={update.category}
              title={update.title}
              description={update.description}
              status={update.status}
            />
          ))}
        </div>

        {/* Help Banner */}
        <div className="mt-10 md:mt-14">
          <HelpBanner />
        </div>

      </div>
    </section>
  );
};

export default UpdatesSection;