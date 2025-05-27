import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "@/design-system.css";
import { useNavigate, Link } from "react-router-dom";

interface CaseStudyCardProps {
  icon: string;
  title: string;
  tools: string;
  backgroundImage: string;
  id: string | number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  icon,
  title,
  tools,
  backgroundImage,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <article className="relative h-full mr-2">
      <div className="absolute top-0 right-0 z-10 ">
        <Link
          to={`/user-details/${id}`}
          className="bg-[#1D1D1F] p-3 flex items-center justify-center rounded-lg w-[48px] h-[48px] cfs"
        >
          <ArrowUpRight className="text-white w-6 h-6" />
        </Link>
      </div>
      <div className="inverted-radius  rounded-lg overflow-hidden h-full relative">
        <div className="flex flex-col h-full">
          {/* Content area */}
          <div className="flex flex-col p-6 pb-4 flex-grow">
            {/* Status badge */}
            <div className="mb-5">
              <div className="bg-red-50 text-red-500 font-medium text-xs py-1.5 px-4 rounded-full inline-block">
                Non - Attempted
              </div>
            </div>

            <h3 className="text-[#1D1D1F] text-xl font-semibold leading-tight mb-3 line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{tools}</p>
            <div className="mt-auto">
              <Button
                className="btn"
                onClick={() => navigate(`/user-details/${id}`)}
              >
                Start Now!
              </Button>
            </div>
          </div>

          {/* Background image container with fixed height */}
          <div className="h-52 w-full overflow-hidden">
            <img
              src={backgroundImage}
              alt="Case study background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
