import React, { useContext } from 'react';
import {FormUpdateDispatchContext } from './FormUpdateContext';

export default function Education({ exp }) {
  const dispatch = useContext(FormUpdateDispatchContext);

  return (
    <form className="general-info-form" action="">
      <div className="flex-container flex flex-col gap-2">
        <label className="relative text-xl h-10">
          <div className="absolute text-lg">Institution:{' '}</div>
          <input
            value={exp.school}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'edu',
                blank: 'school',
                content: e.target.value
              })
            }}
            id="school"
            type="text" 
            className="name border-2 absolute left-24 w-1/2"
          />
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
                section: 'edu'
              });
            }}
          >✕</button>}
        </label>
        <label className="relative text-xl h-10">
          <div className="absolute">Title:{' '}</div>
          <input
            value={exp.title}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'edu',
                blank: 'title',
                content: e.target.value
              })
            }}
            id="title"
            type="text" 
            className="name border-2 absolute left-24 w-1/2"
          />
        </label>
        <label className="relative w-[24.8rem] text-xl h-10">
          <div className="absolute text-lg">Start Date:{' '}</div>
          <input 
            value={exp.eduStart}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'edu',
                blank: 'eduStart',
                content: e.target.value
              });
            }}
            type="date" 
            id="expStart"  
            className="name border-2 left-24 w-[7.7rem] absolute"
          />
          <div className="absolute left-[15rem] text-lg">End:{' '}</div>
          <input 
            value={exp.eduEnd}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'edu',
                blank: 'eduEnd',
                content: e.target.value
              });
            }}
            type="date"
            id="expEnd"  
            className="name border-2 left-[18rem] w-[7.7rem] absolute"
          />
        </label>
      </div>
    </form>
  )
}