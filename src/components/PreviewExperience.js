import React from 'react';

export default function PreviewEducation({ exp }) {

  return (
    <ul className='list-inside'>
      <div className="px-3">
        <li className='text-2xl font-medium'>{exp.companyName}</li>
        <div className="flex justify-between">
          <div className="italic font-base text-base">{exp.position}</div>
          <div className='font-bold text-lg -translate-y-5'>{exp.expStart.slice(0, 4)} - {exp.expEnd.slice(0, 4)}</div>
        </div>
        {exp.role.length !== 0 && <div className="pt-5 text-base font-normal max-w-[39rem]">{exp.role}</div>}
      </div>
    </ul>
  )
}

