import indiaMap from "../assets/india-outline.svg";

const IndiaMap = () => {
  return (
    <div className="mt-10 flex flex-col items-center">

      {/* MAP CONTAINER */}
      <div className="relative w-fit">

        {/* INDIA MAP */}
        <img
          src={indiaMap}
          alt="India Map"
          className="w-[180px] opacity-40 md:w-[220px]"
        />

        {/* NAGPUR LOCATION */}
        <div className="absolute left-[40%] top-[54%]">

          {/* Pulse Glow */}
          <div className="absolute h-3 w-3 animate-ping rounded-full bg-[#14B8A6]/40" />

          {/* Main Dot */}
          <div className="relative h-2 w-2 rounded-full bg-[#14B8A6] shadow-[0_0_25px_rgba(20,184,166,0.9)]" />

        </div>

        {/* LOCATION LABEL */}
        <div className="absolute left-[45%] top-[50%] rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0F3D5E] shadow-md">
          Nagpur
        </div>

      </div>

      {/* BOTTOM TEXT */}
      <p className="mt-4 text-sm font-medium tracking-wide text-[#14B8A6]">
        Serving Vidarbha Region
      </p>

    </div>
  );
};

export default IndiaMap;