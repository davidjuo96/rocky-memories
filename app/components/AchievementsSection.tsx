// Add the necessary import for React and AnimatedNumbers
import React from "react";

interface Achievement {
  prefix?: string;
  metric: string;
  value: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  {
    metric: "Proyectos",
    value: "1",
  },
  {
    metric: "Participantes",
    value: "14",
  },
  {
    metric: "Reconocimientos",
    value: "7",
  },
  {
    metric: "Años",
    value: "1",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
