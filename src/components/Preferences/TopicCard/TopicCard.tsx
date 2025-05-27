import React from "react";
import { Check, Plus } from "lucide-react";
import { Badge } from "@/components/Preferences/Badge/Badge";
import { InfoItem } from "@/components/Preferences/InfoItem/InfoItem";
import { Topic } from "@/components/Preferences/TopicCard/types";
import "@/index.css";

interface TopicCardProps {
  topic: Topic;
  onClick?: () => void;
  selected?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  onClick,
  selected = false,
}) => {
  return (
    <div
      className={`topic-card ${
        selected ? "selected" : ""
      } flex transition-all duration-300 hover:shadow-md group`}
      style={{
        height: "335px",
        width: "310px",
        backgroundColor: selected ? "transparent" : "#F1F1F7B2",
      }}
      onClick={onClick}
    >
      <div
        className="relative"
        style={{
          zIndex: 0,
          height: "80%", // Increase height of the div
          display: "flex",
          alignItems: "center",
          width: "15%", // Increase width of the div
          top: "50px", // Adjust top positioning if needed
        }}
      >
        <span
          className={`vertical-text font-silkscreen whitespace-nowrap text-[7rem] -ml-6 tracking-tighter -mt-20  ${
            selected ? "text-[#444446]" : "text-gradient"
          }`}
          style={{
            lineHeight: 0.9,
            letterSpacing: "-50px", // Adjust letterSpacing for better fit
          }}
        >
          {topic.verticalLabel || "DATA"}
        </span>
      </div>

      {!selected && (
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full shadow-sm opacity-100 transition-all duration-300"
          style={{ zIndex: 20 }}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          aria-label="Add topic"
        >
          <Plus size={16} />
        </button>
      )}

      {selected && (
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-black rounded-full shadow-sm"
          style={{ zIndex: 20 }}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          aria-label="Add topic"
        >
          <Plus size={16} />
        </button>
      )}

      <div
        className="flex-1 p-4 relative rounded-lg flex flex-col justify-between "
        style={{
          zIndex: 10,
          backgroundColor: selected
            ? "transparent"
            : "rgba(242, 242, 247, 0.7)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      >
        <div className="mb-4 h-32 ">
          <br />
          <h3
            className={`text-2xl font-extrabold mb-1  ${
              selected ? "text-white" : "text-gray-900"
            }`}
          >
            {topic.title}
          </h3>
          <p
            className={`text-sm ${
              selected ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {topic.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mb-4 ">
          {topic.badges.map((badge, index) => (
            <Badge
              key={index}
              type={badge.type}
              label={badge.label}
              selected={selected}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-auto ">
          {topic.infoItems.map((item, index) => (
            <InfoItem
              key={index}
              icon={item.icon}
              label={item.label}
              selected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopicCard);
