import React from "react";
import TopicCard from "@/components/Preferences/TopicCard/TopicCard";
import { Factory as Hospital, BookMarked as LayoutGrid } from "lucide-react";
import { BadgeType } from "@/components/Preferences/TopicCard/types"; // Enum import
import { Header } from "@/components/login/Header";
import UserPreferencesNav from "./UserPreferencesNav";
import { topics } from "@/data/topics";
function UserPreferences() {
  // const topics = [
  //   {
  //     id: "1",
  //     title: "Data Science",
  //     verticalLabel: "DATA",
  //     description: "High demand across industries",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     title: "Product Management",
  //     verticalLabel: "PROD",
  //     description: "Investors love product thinkers",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     title: "Growth Marketing",
  //     verticalLabel: "GROW",
  //     description: "Growth-focused roles appeal to startups",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     title: "Financial Analyst",
  //     verticalLabel: "FIN",
  //     description: "Essential for decision-making in any funded business.",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "5",
  //     title: "UX/UI Design",
  //     verticalLabel: "UXUI",
  //     description:
  //       "Product usability directly affects conversion and retention.",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "6",
  //     title: "Operations Management",
  //     verticalLabel: "OPS",
  //     description: "Great for showcasing efficiency, process thinking.",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "7",
  //     title: "Software Engineering",
  //     verticalLabel: "CODE",
  //     description: "Core technical role and VC magnet",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "8",
  //     title: "Business Development",
  //     verticalLabel: "BDEV",
  //     description: "Sales drive growth, favorite role of investors",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "9",
  //     title: "Operations Management",
  //     verticalLabel: "OPS",
  //     description: "Great for showcasing efficiency, process thinking.",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "10",
  //     title: "Business Development",
  //     verticalLabel: "BDEV",
  //     description: "Sales drive growth, favorite role of investors",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "11",
  //     title: "Data Science",
  //     verticalLabel: "DATA",
  //     description: "High demand across industries",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  //   {
  //     id: "12",
  //     title: "Financial Analyst",
  //     verticalLabel: "FIN",
  //     description: "Essential for decision-making in any funded business.",
  //     badges: [
  //       { type: BadgeType.Demand, label: "High Demand" },
  //       { type: BadgeType.Hot, label: "Hot Topic" },
  //       { type: BadgeType.Favorite, label: "Industry Favorite" },
  //     ],
  //     infoItems: [
  //       { icon: Hospital, label: "Healthcare" },
  //       { icon: LayoutGrid, label: "100+ Simulations" },
  //     ],
  //   },
  // ];

  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId],
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white p-6 md:p-12">
        <UserPreferencesNav />
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-zinc">
            {topics.map((topic) => (
              <div key={topic.id} className="h-full ">
                <TopicCard
                  topic={topic}
                  selected={selectedTopics.includes(topic.id)}
                  onClick={() => handleTopicToggle(topic.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(UserPreferences);
