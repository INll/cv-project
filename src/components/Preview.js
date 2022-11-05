import React, { useState, useContext } from 'react';
import { FormUpdateDataContext } from './FormUpdateContext';
import PreviewEducation from './PreviewEducation';
import PreviewExperience from './PreviewExperience';

export default function Preview() {
  const formData = useContext(FormUpdateDataContext);

  return (
    <>
      <ul className="divide-y p-2">
        <li className='flex flex-col p-8 gap-5'>
          <div className="uppercase font-bold text-[3.25rem]">{formData[0].name}</div>
          <div className="flex justify-between">
            <div className="flex text-xl font-normal gap-5">
              <div className="-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" stroke-width="1.5" stroke="currentColor" className="w-9 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              {formData[0].email}
            </div>
            <div className="flex text-xl font-normal gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
              {formData[0].telNo}
              </div>
          </div>
          {/* HOW DO I ADD A SMALL BLACK BORDER TO THE LEFT??? */}
          <div className="quote bg-gradient-to-tr from-neutral-100 to-white rounded-xl text-center px-2 py-5">{formData[0].selfIntro}</div>
        </li>
        <li className='flex flex-col p-8 gap-5'>
          <div className="font-bold text-3xl">Education</div>
          {formData[1].exp.map((eduExp) => (
            <PreviewEducation exp={eduExp} />
          ))}
        </li>
        <li className='flex flex-col p-8 gap-5'>
          <div className="font-bold text-3xl">Practical Experience</div>
          {formData[1].exp.map((eduExp) => (
            <PreviewExperience exp={eduExp} />
          ))}
        </li>
      </ul>
    </>
  )
}