interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  color: string;
}

const ProcessStep = ({ step, title, description, color }: ProcessStepProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center p-4 text-center transition-all duration-300 hover:-translate-y-1">
      {" "}
      {/* Circle */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-110 ${color}`}
      >
        {step}
      </div>
      {/* Content */}
      <div className="mt-6">
        <h3 className="card-title text-[#0F3D5E]">{title}</h3>

        <p className="body-copy mt-2 max-w-[180px] text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;
