import React from 'react';

export default function GeneralInfoForm() {
  return (
    <div className="general-info flex flex-col mx-10 my-8 gap-8">
    <div className="title font-bold uppercase text-5xl tracking-wider text-stone-900">GENERAL INFO</div>
      <form className="general-info-form" action="">
        <div className="flex-container flex flex-col gap-2">
          <label className="relative text-xl h-10">
            <div className="absolute">Name:{' '}</div>
            <input type="text" className="name border-2 absolute left-24 w-1/2"/>
          </label>
          <label className="relative text-xl h-10">
            <div className="absolute">Email:{' '}</div>
            <input type="text" className="name border-2 absolute left-24 w-1/2"/>
          </label>
          <label className="relative text-xl h-10">
            <div className="absolute">Tel. No:{' '}</div>
            <input type="text" className="name border-2 absolute left-24 w-1/2"/>
          </label>
        </div>
      </form> 
  </div>
  )
}