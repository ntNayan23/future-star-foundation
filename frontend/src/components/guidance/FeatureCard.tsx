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
    <div className="flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/20 hover:shadow-lg">
      {/* Icon */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl text-2xl ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="card-title text-[#0F3D5E]">{title}</h3>

        <p className="body-copy mt-1 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
