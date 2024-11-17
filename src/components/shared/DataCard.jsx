import React from "react";

const DataCard = ({ info, plusTwo, number, title, man, women, data }) => {
  return (
    <div
      className="py-5 px-5   rounded-[0.625rem] border justify-between flex">
        <div className=" flex flex-col justify-between ">
          <h4 className='text-lg font-medium'>{title}</h4>
          <h1 className='text-5xl font-medium my-1'>{number}</h1>
          <p className='text-xs text-[#686868] font-normal'>{man}</p>
          <p className='text-xs text-[#686868]  font-normal'>{women}</p>
        </div>
        <div>
          <img src={plusTwo} alt="" />
          <button className="w-[6.688rem] h-[1.5rem] mt-6 text-xs bg-[#ffefe7] rounded-[4px]">{data}</button>
        </div>
    </div>
  );
};

export default DataCard;
