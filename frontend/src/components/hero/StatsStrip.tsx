import { FaUserGraduate, FaHandshake, FaHeadset } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const StatsStrip = () => {
  const stats = [
    {
      number: "5000+",
      label: "Students Guided",
      icon: <FaUserGraduate />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <MdWorkspacePremium />,
    },
    {
      number: "100+",
      label: "Partner Colleges",
      icon: <FaHandshake />,
    },
    {
      number: "24/7",
      label: "Student Support",
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="border-t border-white/10 bg-black/10 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-3 md:grid-cols-4 md:px-6 lg:px-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 md:gap-4"
          >
            {/* Icon (no background box) */}
            <div className="text-xl text-[#3EEAD8] md:text-2xl flex-shrink-0">
              {stat.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold text-white md:text-3xl leading-none">
                {stat.number}
              </h3>
              <p className="text-[11px] text-white/70 md:text-xs mt-1">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;