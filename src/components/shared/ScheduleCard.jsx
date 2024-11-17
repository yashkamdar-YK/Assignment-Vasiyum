// import React from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { MoreHorizontal, ChevronDown } from "lucide-react";
// import "../../App.css";

// const ScheduleCard = () => {
//   const schedules = [
//     {
//       category: "Priority",
//       items: [
//         {
//           title: "Review candidate applications",
//           time: "Today - 11:30 AM",
//         },
//       ],
//     },
//     {
//       category: "Other",
//       items: [
//         {
//           title: "Interview with candidates",
//           time: "Today - 10:30 AM",
//         },
//         {
//           title: "Short meeting with product designer from IT Department",
//           time: "Today - 09:15 AM",
//         },
//       ],
//     },
//   ];

//   return (
//     <Card className="w-full h-auto md:h-[319px] lg: flex flex-col">
//       <CardHeader className="flex-none flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-lg font-medium">Upcoming Schedule</CardTitle>
//         <button className="flex items-center gap-2 px-2 py-1 border rounded-md text-gray-600 text-xs">
//           Today, 13 Sep 2021
//           <ChevronDown className="h-4 w-4" />
//         </button>
//       </CardHeader>

//       <CardContent className="flex flex-col ">
//         {/* Scrollable container with fixed height to show only 2 items */}
//         <div className="flex-1 overflow-y-auto no-scrollbar px-5">
//           <div className="space-y-3 h-[240px] overflow-y-auto">
//             {/* Priority Section */}
//             <div className="space-y-1.5">
//               <h3 className="text-[#686868] text-sm">Priority</h3>
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                 <div className="space-y-1">
//                   <h4 className="text-base text-[#303030]">
//                     {schedules[0].items[0].title}
//                   </h4>
//                   <p className="text-[10px] text-[#686868]">
//                     {schedules[0].items[0].time}
//                   </p>
//                 </div>
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <MoreHorizontal className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Other Section */}
//             <div className="space-y-1.5">
//               <h3 className="text-[#686868] text-sm">Other</h3>
//               {schedules[1].items.map((item, itemIndex) => (
//                 <div
//                   key={itemIndex}
//                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
//                 >
//                   <div className="space-y-1">
//                     <h4 className="text-base text-[#303030]">{item.title}</h4>
//                     <p className="text-[10px] text-[#686868]">{item.time}</p>
//                   </div>
//                   <button className="text-gray-400 hover:text-gray-600">
//                     <MoreHorizontal className="h-5 w-5" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Fixed button at bottom */}
//         <div className="flex-none mt-6">
//           <button className="w-full text-center text-red-500 hover:text-red-600 font-medium">
//             Create a New Schedule
//           </button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ScheduleCard;


import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import "../../App.css";

const ScheduleCard = () => {
  const schedules = [
    {
      category: "Priority",
      items: [
        {
          title: "Review candidate applications",
          time: "Today - 11:30 AM",
        },
      ],
    },
    {
      category: "Other",
      items: [
        {
          title: "Interview with candidates",
          time: "Today - 10:30 AM",
        },
        {
          title: "Short meeting with product designer from IT Department",
          time: "Today - 09:15 AM",
        },
      ],
    },
  ];

  return (
    <Card className="w-full h-auto flex flex-col">
      <CardHeader className="flex-none flex flex-row pt-5 pb-5 items-center justify-between ">
        <CardTitle className="text-lg font-medium">Upcoming Schedule</CardTitle>
        <button className="flex items-center gap-2 px-2 py-1 border rounded-md text-gray-600 text-xs">
          Today, 13 Sep 2021
          <ChevronDown className="h-4 w-4" />
        </button>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow">
        {/* Scrollable container with fixed height to show only 2 items */}
        <div className="flex-1 px-5">
          <div className="space-y-3 lg:h-[269px] md:h-[196px] overflow-y-auto no-scrollbar">
            {/* Priority Section */}
            <div className="space-y-1.5">
              <h3 className="text-[#686868] text-sm">Priority</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="space-y-1">
                  <h4 className="text-base text-[#303030]">
                    {schedules[0].items[0].title}
                  </h4>
                  <p className="text-[10px] text-[#686868]">
                    {schedules[0].items[0].time}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Other Section */}
            <div className="space-y-2">
              <h3 className="text-[#686868] text-sm">Other</h3>
              {schedules[1].items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="space-y-1">
                    <h4 className="text-base text-[#303030]">{item.title}</h4>
                    <p className="text-[10px] text-[#686868]">{item.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed button at bottom */}
        <div className="px-5  pt-3 border-t">
          <button className="w-full text-center text-red-500 hover:text-red-600 font-medium">
            Create a New Schedule
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;