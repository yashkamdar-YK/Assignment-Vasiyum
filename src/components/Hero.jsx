import React from "react";
import InfoCard from "./shared/InfoCard";
import DataCard from "./shared/DataCard";
import plusTwo from "../assets/+2.svg";
import plusFive from "../assets/+5.svg";
import AnnouncementSection from "./shared/AnnouncementSection";
import ActivityCard from "./shared/ActivityCard";
import ScheduleCard from "./shared/ScheduleCard";

const Hero = () => {
  return (
    <div className="lg:mx-[3.125rem]  md:mx-[2.563rem] items-center justify-between">
      <h1 className="text-2xl py-[1.313rem] font-medium">Dashboard</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        {/* Main Content Section */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.875rem]">
            <InfoCard
              textcolour="#ff5151"
              backgroundColor="#FFEFE7"
              title="Available Position"
              number="24"
              info="4 Urgently needed"
            />
            <InfoCard
              textcolour="#3786f1"
              backgroundColor="#e8f0fb"
              title="Job Open"
              number="10"
              info="4 Active hiring"
            />
            <InfoCard
              textcolour="#ee64d0"
              backgroundColor="#fdebf9"
              title="New Employees"
              number="24"
              info="4 Department"
            />
          </div>

          {/* Data Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DataCard
              textcolour="#ee64d0"
              backgroundColor="#fdebf9"
              title="Total Employees"
              number="216"
              man="120 Man"
              women="96 Women"
              plusTwo={plusTwo}
              data="+2% Past month"
            />
            <DataCard
              textcolour="#ee64d0"
              backgroundColor="#fdebf9"
              title="Talent Request"
              number="16"
              man="6 Man"
              women="10 Women"
              plusTwo={plusFive}
              data="+5% Past month"
            />
          </div>

          {/* Announcement Section */}
          <AnnouncementSection />
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-6">
          <div className="w-full md:w-[250px] lg:w-full flex-shrink-0">
            <ActivityCard />
          </div>
          <div className="w-full flex-grow">
            <ScheduleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;