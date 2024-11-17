import React from 'react'

const InfoCard = ({backgroundColor, textcolour, info,number, title }) => {
  return (
    <div 
    style={{ backgroundColor }}
    className='w-full py-[0.9rem] px-5 rounded-[0.625rem] border justify-between flex flex-col'>
        <h4 className='text-lg font-medium'>{title}</h4>
        <h1 className='text-4xl font-medium my-1'>{number}</h1>
        <h4 style={{ color: textcolour }} className='text-base font-normal'>{info}</h4>
    </div>
  )
}

export default InfoCard