
const regions = [
  "Nagpur",
  "Wardha",
  "Chandrapur",
  "Gondia",
  "Amravati",
  "Yavatmal",
  "Bhandara",
];

const Pills = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-sm flex-wrap justify-center gap-3 md:max-w-none md:gap-4">

      {regions.map((region) => (
        <div
          key={region}
          className="cursor-pointer rounded-full border border-gray-200 bg-white px-4 py-2 md:px-6 md:py-3 text-sm font-medium text-[#0F3D5E] shadow-sm transition-all duration-300 hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/5 hover:text-[#14B8A6]"
        >
          {region}
        </div>
      ))}

    </div>
  );
};

export default Pills;