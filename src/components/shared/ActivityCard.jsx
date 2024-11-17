import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ActivityCard = () => {
  return (
    <Card className="lg:w-full lg:h-[258px] md:w-[255px] md:h-full bg-[#121843] text-white rounded-xl overflow-hidden">
      <CardContent className=" h-full flex flex-col justify-between">
        {/* Header and main content */}
        <h2 className="lg:text-lg px-5 md:text-base bg-[#1b204a] w-full font-medium py-[10px]">
          Recently Activity
        </h2>
        <div className="px-5 ">
          <div>
            <p className="text-gray-400 font-medium lg:text-xs md:text-[10px] mb-2">
              10.40 AM, Fri 10 Sept 2021
            </p>

            <h3 className="lg:text-lg md:text-base mb-3">
              You Posted a New Job
            </h3>

            <p className="text-sm text-gray-300">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>
          </div>
        </div>

        {/* Footer section */}
        <div className="lg:flex px-5 justify-between items-center mt-4">
          <p className="text-sm md:mb-5">Today you makes 12 Activity</p>
          <button className="bg-red-500 hover:bg-red-600 w-[8.688rem] text-white text-sm px-4 py-[10px] rounded-sm transition-colors">
            See All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
