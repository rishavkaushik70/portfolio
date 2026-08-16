import { IconType } from "react-icons";

interface ResumeCardProps {
  icon: IconType;
  role: string;
  title: string;
  description: string;
  tech: string;
}

const ResumeCard = ({
  icon: Icon,
  role,
  title,
  description,
  tech,
}: ResumeCardProps) => {
  return (
    <div className="bg-[#11112a] rounded-lg p-6 sm:p-8 border border-white/5 hover:border-cyan-200/30 transition-all duration-300">
      <div className="flex gap-5 sm:gap-6">
        {/* Icon */}
        <div className="shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#17265c] flex items-center justify-center">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Date / Role */}
          <span className="inline-block bg-white text-[#11112a] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {role}
          </span>

          <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>

          <p className="text-gray-300 mt-3 leading-relaxed text-sm sm:text-base">
            {description}
          </p>

          <p className="text-cyan-200 mt-4 text-sm font-medium">{tech}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
