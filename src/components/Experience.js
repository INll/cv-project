import React, { useContext } from "react";
import { FormUpdateDataContext, FormUpdateDispatchContext } from "./FormUpdateContext";

export default function Experience({ exp }) {
  const dispatch = useContext(FormUpdateDispatchContext);
  
  return (
    <form className="experinece-form" action="">
      <div className="flex-container flex flex-col gap-2">
        <label className="relative text-xl h-10">
          <div className="absolute bottom-1 w-10 text-base">Company Name:{' '}</div>
          <input 
            value={exp.companyName}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'exp',
                blank: 'companyName',
                content: e.target.value  // This is the newest value
              });
            }}
            type="text" 
            id="companyName" 
            className="name border-2 absolute left-24 w-1/2 px-1"
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
              dispatch({
                type: 'deletedExp',
                id: exp.id,
                section: 'exp'
              });
            }}
          >✕</button>}
        </label>
        <label className="relative text-xl h-10">
          <div className="absolute">Position:{' '}</div>
          <input 
            value={exp.position}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'exp',
                blank: 'position',
                content: e.target.value
              });
            }}
            type="text" 
            id="position" 
            className="name border-2 absolute left-24 w-1/2 px-1"
          />
        </label>
        <label className="flex grow flex-col md:flex-row md:w-[24.8rem] gap-3 md:gap-5 w-[24.8rem] text-xl h-auto md:h-10 pb-2">
          <div className="flex gap-3 md:gap-0">
            <div className="text-lg md:w-24">Start Date:{' '}</div>
            <input
              value={exp.expStart}
              onChange={e => {
                dispatch({
                  id: exp.id,
                  type: 'editedExp',
                  section: 'exp',
                  blank: 'expStart',
                  content: e.target.value
                });
              }}
              type="date"
              id="expStart"
              className="name border-2 left-24 w-[7.7rem] px-1"
            />
          </div>
          <div className="flex gap-[3.8rem] md:gap-0">
            <div className="text-lg md:w-[3.15rem]">End:{' '}</div>
            <input
              value={exp.expEnd}
              onChange={e => {
                dispatch({
                  id: exp.id,
                  type: 'editedExp',
                  section: 'exp',
                  blank: 'expEnd',
                  content: e.target.value
                });
              }}
              type="date"
              id="expEnd"
              className="border-2 left-[18rem] w-[7.7rem] h-auto px-1"
            />
          </div>
        </label>
        <label className="flex text-xl gap-14">
          <div className="w-10">Role:{' '}</div>
          <textarea 
            value={exp.role}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'exp',
                blank: 'role',
                content: e.target.value
              });
            }}
            className="border-2 w-1/2 px-1" 
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