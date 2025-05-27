
import React from "react";

interface TopicSectionProps {
  title: string;
  topics: string[];
}

const TopicSection: React.FC<TopicSectionProps> = ({ title, topics }) => (
  <div className="flex flex-col items-stretch p-6">
    <h2 className="text-xl font-semibold leading-none tracking-[0.38px] bg-clip-text bg-[linear-gradient(90deg,#009FCB_0%,#00BA78_100%)] text-transparent">
      {title}
    </h2>
    <nav className="text-[17px] text-[#444446] font-normal tracking-[-0.41px] leading-none mt-5">
      {topics.map((topic, index) => (
        <div key={index} className={index > 0 ? "mt-2.5" : ""}>
          {topic}
        </div>
      ))}
    </nav>
  </div>
);

export const Sidebar: React.FC = () => {
  const topics = [
    "Company",
    "Design",
    "Technology",
    "Crypto",
    "Artificial Intelligence",
    "Work",
  ];

  return (
    <aside className="flex flex-col min-w-[240px] max-md:pt-10">
      <TopicSection title="Case Study Topics" topics={topics} />
      <div className="mt-[75px] max-md:mt-10">
        <TopicSection title="Trending Topics" topics={topics} />
      </div>
    </aside>
  );
};
