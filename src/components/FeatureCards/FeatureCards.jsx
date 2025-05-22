import React, { useState } from "react";

const cards = [
  {
    color: "bg-yellow-400",
    icon: "/images/workflow-01.png",
    title: "Unify Your Revenue Teams",
    desc: "Seamlessly connect sales, marketing, support, and success.",
  },
  {
    color: "bg-green-500",
    icon: "/images/workflow-02.png",
    title: "Reduce Revenue Leakages",
    desc: "Get a 360° view of customers. Identify failures and successes.",
  },
  {
    color: "bg-blue-500",
    icon: "/images/workflow-03.png",
    title: "Boost Predictable Growth",
    desc: "Gain real-time insights, enhance decision-making, and break silos.",
  },
  {
    color: "bg-sky-400",
    icon: "/images/workflow-01.png",
    title: "Streamline Operations",
    desc: "Automate workflows, follow-ups, and customer interactions.",
  },
];

export default function FeatureCards() {
  const [hovered, setHovered] = useState(false);

  // Card and spread settings
  const cardWidth = 370;
  const cardHeight = 210;
  const spreadAmount = hovered ? cardWidth - 30 : 0; // 340-30=310px spread when hovered
  const containerWidth = hovered ? cardWidth * cards.length + 40 : cardWidth + 60;

  return (
    <section className="w-full bg-white pt-12 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1 min-w-[340px]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Tired of <span className="text-blue-500">Disconnected Teams</span>
            <br />
            and <span className="text-blue-500">Missed Opportunities?</span>
          </h1>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8 border-l-2 border-gray-200 pl-8 max-w-md text-gray-700">
          <p>
            Stop struggling with silos and inefficiencies. Our RevOps-enabling AI-powered CRM software unifies your teams, automates workflows, and provides real-time insights to drive results.
          </p>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-12 relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ minHeight: cardHeight + 40 }}
      >
        <div
          className="relative"
          style={{
            width: containerWidth,
            height: cardHeight,
            transition: "width 0.4s cubic-bezier(.4,2,.6,1)",
          }}
        >
          {cards.map((card, idx) => {
            const baseZ = 10 + idx;
            const spread = hovered ? (idx - 1.5) * spreadAmount : 0;
            const rotate = hovered ? 0 : (idx - 1.5) * 8;
            const top = hovered ? 0 : idx * 6;
            const isTop = !hovered && idx === cards.length - 1;

            return (
              <div
                key={card.title}
                className={`
                  absolute left-1/2
                  transition-all duration-500 ease-in-out
                  rounded-2xl shadow-2xl flex flex-col items-center
                  ${card.color}
                  ${isTop || hovered ? "cursor-pointer" : "pointer-events-none"}
                `}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  zIndex: baseZ,
                  transform: `translate(-50%, ${top}px) translateX(${spread}px) rotate(${rotate}deg)`,
                  boxShadow: isTop || hovered ? "0 8px 32px 0 rgba(0,0,0,0.18)" : "0 2px 8px 0 rgba(0,0,0,0.10)",
                  opacity: !hovered && idx !== cards.length - 1 ? 0.7 : 1,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img src={card.icon} alt="" className="w-10 h-10 mb-2" />
                <div
                  className={`
                    text-white
                    ${isTop || hovered ? "text-xl font-bold" : "text-base font-semibold"}
                    text-center mb-1 transition-all duration-300
                    whitespace-pre-line
                  `}
                  style={{ wordBreak: "break-word" }}
                >
                  {card.title}
                </div>
                <div
                  className={`
                    text-white
                    ${isTop || hovered ? "text-base font-medium" : "text-sm font-normal"}
                    text-center transition-all duration-300
                  `}
                  style={{ wordBreak: "break-word" }}
                >
                  {card.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 