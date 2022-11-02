import React, { useState } from "react";

export default function Experience({ exp, handler }) {
  const [details, setDetails] = useState(exp);

  function handleFormChange(e) {
    switch(e.target.id){
      case 'companyName':
        return (setDetails({
          ...details,
          companyName: e.target.value
        }));
      case 'position':
        return (setDetails({
          ...details,
          position: e.target.value
        }));
      case 'expStart':
        return (setDetails({
          ...details,
          from: e.target.value
        }));
      case 'expEnd':
        return (setDetails({
          ...details,
          to: e.target.value
        }));
      case 'role':
        return (setDetails({
          ...details,
          role: e.target.value
        }));
    }
  }
  
  return (
    <form className="experinece-form" action="">
      <div className="flex-container flex flex-col gap-2">
        <label className="relative text-xl h-10">
          <div className="absolute bottom-1 w-10 text-base">Company Name:{' '}</div>
          <input 
            value={details.companyName} 
            type="text" 
            onChange={handleFormChange}
            id="companyName" 
            className="name border-2 absolute left-24 w-1/2"
          />
          {// Button only shows up if it's not the first component //
          }
          {exp.id !== 0 && 
          <button 
            className="float-right text-xs h-8 w-8 bg-slate-100 hover:bg-slate-200
            active:bg-slate-300 font-extrabold text-slate-500
             active:text-slate-600"
             onClick={e => {
               e.preventDefault();
               console.log(`Button at ${exp.id} is pressed.`);
               console.log(details);
               handler(exp.id);}}
          >✕</button>}
        </label>
        <label className="relative text-xl h-10">
          <div className="absolute">Position:{' '}</div>
          <input 
            value={details.position}
            onChange={handleFormChange}
            type="text" 
            id="position" 
            className="name border-2 absolute left-24 w-1/2"
          />
        </label>
        <label className="relative w-[24.8rem] text-xl h-10">
          <div className="absolute text-lg">Start Date:{' '}</div>
          <input 
            value={details.from}
            onChange={handleFormChange}
            type="date" 
            id="expStart"  
            className="name border-2 left-24 w-[7.7rem] absolute"
          />
          <div className="absolute left-[15rem] text-lg">End:{' '}</div>
          <input 
            value={details.to}
            onChange={handleFormChange}
            type="date"
            id="expEnd"  
            className="name border-2 left-[18rem] w-[7.7rem] absolute"
          />
        </label>
        <label className="flex text-xl gap-14">
          <div className="w-10">Role:{' '}</div>
          <textarea 
            value={details.role}
            onChange={handleFormChange}
            className="border-2 w-1/2" 
            name="role"
            id="role"
            cols="30"
            rows="2"
          ></textarea>
        </label>
      </div>
    </form> 
  )
} 