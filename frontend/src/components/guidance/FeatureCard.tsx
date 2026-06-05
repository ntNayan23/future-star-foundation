interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  iconBg,
  iconColor,
}: FeatureCardProps) => {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-[#14B8A6]/20 hover:shadow-md">

      {/* Icon */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-[#0F3D5E]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;