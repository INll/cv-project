import React from 'react';

export default function MainForm({ children }) {
  return (
    <div className="flex flex-col mt-8 gap-8">
      <div className="button-groups relative flex justify-center gap-16">
        <button className="save-button rounded-lg focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800
         focus:ring-4 focus:ring-neutral-300 font-medium text-sm px-5 py-2">Save{
          // isEditing ? 'Save' : 'Edit'
        }</button>
        <button className="export-button rounded-lg focus:outline-none text-white bg-green-700 hover:bg-green-800
         focus:ring-4 focus:ring-neutral-300 font-medium text-sm px-5 py-2">Export{
          // isEditing ? 'Save' : 'Edit'
        }</button>
        <div className="hint-text absolute top-5 text-xs left-1/2 ml-[7.25rem] text-neutral-600 italic">(Supported format: .pdf, .jpeg)</div>
      </div>
      <div className="formBody inline-block bg-white rounded-md drop-shadow-2xl min-w-full md:min-w-[732px] mx-auto">
        {children}
      </div>
    </div>
  )
}