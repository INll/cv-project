import React, { useRef } from 'react';

export default function MainForm({ isEditing, onClick, children }) {

  return (
    <div className="flex flex-col mt-8 gap-8">
      <div className="button-groups relative flex justify-center gap-16">
        <button 
          className="save-button rounded-lg focus:outline-none text-white
         bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-neutral-300 
          font-medium text-sm px-5 py-2 w-20"
          onClick={onClick}
         >{isEditing ? 'Save' : 'Edit'}
        </button>
          <button 
            className="export-button rounded-lg focus:outline-none text-white
            bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-neutral-300
              font-medium text-sm px-5 py-2 w-20"
          >Export</button>
        <div className="hint-text absolute w-20 md:w-auto top-5 text-xs translate-x-[6.25rem] md:translate-x-[7.75rem] ml-[7.25rem] 
        text-neutral-600 italic">(Supported format: .pdf)</div>
      </div>
        <div className="formBody inline-block bg-white rounded-md drop-shadow-2xl
        w-full md:w-[732px] mx-auto mb-28">
          {children}
      </div>
    </div>
  )
}