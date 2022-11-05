import React from 'react';

export default function PreviewEducation({ exp }) {

  return (
    <ul className='list-disc list-inside'>
      <div className="px-1">
        <li className='text-2xl font-medium'>{exp.school}</li>
        <div className="flex justify-between">
          <div className="italic font-base text-base translate-x-[2.1rem]">{exp.degree}</div>
          <div className='font-bold text-lg -translate-y-5'>{exp.eduStart.slice(0, 4)} - {exp.eduEnd.slice(0, 4)}</div>
        </div>
      </div>
    </ul>
  )
}