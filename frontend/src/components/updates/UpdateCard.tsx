interface UpdateCardProps {
  category: string;
  title: string;
  description: string;
  status: string;
}

const UpdateCard = ({
  category,
  title,
  description,
  status,
}: UpdateCardProps) => {
  return (
    <div
      className="
        rounded-xl
        border border-gray-200
        bg-white
        p-4 sm:p-5
        shadow-sm
        transition-all duration-300
        hover:shadow-lg md:hover:-translate-y-1
      "
    >
      {/* Top */}
      <div className="mb-4 flex items-center justify-between">

        <span
          className={`
            rounded-full px-3 py-1 text-xs font-semibold
            ${
              category === "Urgent"
                ? "bg-[#F97316]/10 text-[#F97316]"
                : "bg-[#14B8A6]/10 text-[#14B8A6]"
            }
          `}
        >
          {category}
        </span>

        <span className="meta-text text-gray-400">
          {status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#0F3D5E] sm:text-xl leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-base leading-[1.6] text-gray-500 sm:mt-3">
        {description}
      </p>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg border border-gray-200 py-2.5 text-[0.9375rem] font-semibold text-[#0F3D5E] transition hover:border-[#F97316] hover:text-[#F97316] sm:py-3">
        View Details
      </button>
    </div>
  );
};

export default UpdateCard;