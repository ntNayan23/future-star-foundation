import { motion } from "framer-motion";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  className?: string;
  duration?: number;
  direction?: "up" | "down";
  icon?: React.ReactNode;
  iconColor?: string;
}

const FloatingCard = ({
  title,
  subtitle,
  className,
  duration = 4,
  direction = "up",
  icon,
  iconColor = "bg-[#14B8A6]/10 text-[#14B8A6]",
}: FloatingCardProps) => {
  return (
    <motion.div
      animate={{
        y: direction === "up" ? [0, -10, 0] : [0, 10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        w-[180px] md:w-auto
        rounded-2xl
        bg-white
        p-3 md:p-5
        text-[#0F3D5E]
        shadow-[0_10px_40px_rgba(0,0,0,0.18)]
        ${className}
      `}
    >
      <div className="flex items-center gap-2 md:gap-4">
        {/* Icon */}
        <div
          className={`
            flex
            h-10 w-10 md:h-12 md:w-12
            items-center justify-center
            rounded-full
            text-lg md:text-xl
            flex-shrink-0
            ${iconColor}
          `}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-tight md:text-2xl">
            {title}
          </h3>

          <p className="text-xs text-gray-500 md:text-sm">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;