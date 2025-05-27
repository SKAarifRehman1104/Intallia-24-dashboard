
import React from "react";
import { CaseStudyCard } from "./CaseStudyCard";

const caseStudies = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/62a0fd16e70fbcd2b4be07767ea671dd45e6e6aa?placeholderIfAbsent=true",
    title: "Create a Sales Dashboard for Meesho's E-commerce Category Manager",
    tools:
      "Tools used: Excel, PowerPoint, Gmail Skills: Sales data analysis, reporting, client-ready presentations",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/0a3444635181074d2aa939b449da0dac31516fea?placeholderIfAbsent=true",
    id: 1

  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/b5573fbdec000a22320254086915c03b22e03ae4?placeholderIfAbsent=true",
    title: "Plan a New Product Launch for boAt Lifestyle (Wearables Division)",
    tools:
      "Tools used: Google Slides, Excel, Draw.io, Gmail Skills: Market strategy, team coordination, campaign mapping",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/fff1d75923b4c4dfc95ec9d9ad9953540a6e291f?placeholderIfAbsent=true",
    id: 2

  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/eeb1358be1deb5cb52a449c3f6429089e9323920?placeholderIfAbsent=true",
    title: "Send Monthly Region-wise Sales Report to Manager at Marico",
    tools:
      "Tools used: Excel, Outlook, Word Skills: Sales tracking, summary writing, email etiquette",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/f4a4cd0af34ea7b63510be17b9d66c44567416ea?placeholderIfAbsent=true",
    id:3

  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/8c00e652c03bb8edede18d3e99020ad5cb3c1810?placeholderIfAbsent=true",
    title:
      "Conduct Customer Feedback Survey for Zomato and Create Insights Deck",
    tools:
      "Tools used: Google Forms, Excel, PowerPoint, Gmail Skills: Research, insights presentation, communication",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/d04cdd3365b1e541671253468b6a8b057602bcb9?placeholderIfAbsent=true",
    id: 4

  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/f5f575d40f79222fa8e659fb453960799143f1a0?placeholderIfAbsent=true",
    title: "Report Google Ads Campaign Results for Mamaearth's D2C Channel",
    tools:
      "Tools used: Google Sheets, Gmail, Canva Skills: Ad performance review, creative insights, email summary",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/08cd20b9b6785728025b24c97c6de03a6a21da8c?placeholderIfAbsent=true",
    id: 5

  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/86f188e9d515c7fccc0c28d909b2437c798466e1?placeholderIfAbsent=true",
    title: "Create a Sales Pitch Deck for Razorpay and Send to Prospects",
    tools:
      "Tools used: PowerPoint, Excel, Outlook Skills: Solution-selling, pitch creation, follow-up",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/3ceda57ff02e3e5be7b6f569f0c3bf023cfb0437?placeholderIfAbsent=true",
    id:6
    // waveImage:
    //   "https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/3ceda57ff02e3e5be7b6f569f0c3bf023cfb0437?placeholderIfAbsent=true",
  },
];

export const CaseStudyGrid: React.FC = () => {
  return (
    <main className="flex-1 py-10 lg:py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="h-full">
            <CaseStudyCard {...study} />
          </div>
        ))}
      </div>
    </main>
  );
};
