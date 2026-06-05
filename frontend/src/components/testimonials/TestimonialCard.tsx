import { HiStar } from "react-icons/hi";

interface TestimonialCardProps {
  name: string;
  course: string;
  message: string;
  image: string;
}

const TestimonialCard = ({
  name,
  course,
  message,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Stars */}
      <div className="flex items-center gap-1 text-[#F97316]">

        {[...Array(5)].map((_, index) => (
          <HiStar key={index} className="text-lg" />
        ))}

      </div>

      {/* Message */}
      <p className="mt-5 text-base italic leading-7 text-gray-500">
        "{message}"
      </p>

      {/* Bottom */}
      <div className="mt-8 flex items-center gap-4">

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        {/* Content */}
        <div>

          <h4 className="text-lg font-semibold text-[#0F3D5E]">
            {name}
          </h4>

          <p className="text-sm font-medium text-[#14B8A6]">
            Admitted to {course}
          </p>

        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;