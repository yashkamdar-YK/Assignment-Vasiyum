// import React from "react";
// import { BsFillPinAngleFill } from "react-icons/bs";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// const AnnouncementSection = () => {
//   const announcements = [
//     {
//       title: "Outing schedule for every departement",
//       time: "5 Minutes ago",
//     },
//     {
//       title: "Meeting HR Department",
//       time: "Yesterday, 12:30 PM",
//     },
//     {
//       title: "IT Department need two more talents for UX/UI Designer position",
//       time: "Yesterday, 09:15 AM",
//     },
//     {
//       title: "Outing schedule for every departement",
//       time: "5 Minutes ago",
//     },
//   ];

//   return (
//     <Card className="">
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-xl text-[#121843] font-medium">
//           Announcement
//         </CardTitle>
//         <div className="flex items-center gap-2">
//           <select className="px-2 py-1 border rounded- text-gray-600 text-xs">
//             <option>Today, 13 Sep 2021</option>
//           </select>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4 px-5 ">
//           {announcements.map((announcement, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg"
//             >
//               <div className="space-y-1">
//                 <p className="text-[#303030]">{announcement.title}</p>
//                 <p className="text-[10px] text-[#686868]  ">
//                   {announcement.time}
//                 </p>
//               </div>
//               <div className="flex items-center gap-7">
//                 <BsFillPinAngleFill className="h-5 w-5 text-gray-400 cursor-pointer" />
//                 <HiOutlineDotsHorizontal className="h-5 w-5 text-gray-400 cursor-pointer" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="w-full text-center text-red-500 mt-6 font-medium">
//           See All Announcement
//         </button>
//       </CardContent>
//     </Card>
//   );
// };

// export default AnnouncementSection;


import React, { useState } from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AnnouncementSection = () => {
  const [showAll, setShowAll] = useState(false);

  const announcements = [
    {
      title: "Outing schedule for every departement",
      time: "5 Minutes ago",
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
    },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
    {
      title: "Outing schedule for every departement",
      time: "5 Minutes ago",
    },
  ];

  const visibleAnnouncements = showAll 
    ? announcements 
    : announcements.slice(0, 3);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl text-[#121843] font-medium">
          Announcement
        </CardTitle>
        <div className="flex items-center gap-2">
          <select className="px-2 py-1 border rounded- text-gray-600 text-xs">
            <option>Today, 13 Sep 2021</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 px-5">
          {visibleAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg"
            >
              <div className="space-y-1">
                <p className="text-[#303030]">{announcement.title}</p>
                <p className="text-[10px] text-[#686868]">
                  {announcement.time}
                </p>
              </div>
              <div className="flex items-center gap-7">
                <BsFillPinAngleFill className="h-5 w-5 text-gray-400 cursor-pointer" />
                <HiOutlineDotsHorizontal className="h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        {announcements.length > 3 && (
          <button 
            className="w-full text-center border-t text-red-500 pt-3 font-medium"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All Announcement"}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default AnnouncementSection;
