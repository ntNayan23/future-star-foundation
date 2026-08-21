import { HiArrowUpRight } from "react-icons/hi2";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  icon: React.ElementType;
}

const CourseCard = ({
  title,
  description,
  image,
  badge,
  icon: Icon,
}: CourseCardProps) => {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Badge */}
        <div className="meta-text absolute right-4 top-4 rounded-full bg-[#14B8A6] px-4 py-2 font-bold text-white shadow-lg">
          {badge}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F3D5E]/10 text-xl text-[#0F3D5E]">
            <Icon />
          </div>

          <h3 className="card-title text-[#0F3D5E]">{title}</h3>
        </div>

        {/* Description */}
        <p className="mt-5 min-h-[72px] text-base leading-7 text-[#5B6475]">
          {description}
        </p>

        {/* Button */}
        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#ea580c]">
          Explore Program
          <HiArrowUpRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
