import React, { useContext } from 'react';
import {FormUpdateDispatchContext } from './FormUpdateContext';

export default function Education({ exp }) {
  const dispatch = useContext(FormUpdateDispatchContext);

  return (
    <form className="general-info-form" action="">
      <div className="flex flex-col gap-2">
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
            className="name border-2 absolute left-24 w-1/2 px-1"
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
          <div className="absolute">Degree:{' '}</div>
          <input
            value={exp.degree}
            onChange={e => {
              dispatch({
                id: exp.id,
                type: 'editedExp',
                section: 'edu',
                blank: 'degree',
                content: e.target.value
              })
            }}
            id="degree"
            type="text" 
            className="name border-2 absolute left-24 w-1/2 px-1"
          />
        </label>
        <label className="flex grow flex-col md:flex-row md:w-[24.8rem] gap-3 md:gap-5 w-full text-xl h-auto md:h-10 pb-2">
          <div className="flex gap-3 md:gap-0">
            <div className="text-lg md:w-24">Start Date:{' '}</div>
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
              className="name border-2 left-24 w-[9.2rem] md:w-[7.7rem] px-1"
            />
          </div>
          <div className="flex gap-[3.8rem] md:gap-0">
            <div className="text-lg md:w-[3.15rem]">End:{' '}</div>
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
              className="border-2 left-[18rem] w-[9.2rem] md:w-[7.7rem] h-auto px-1"
            />
          </div>
        </label>
        <label className="text-xl">
            <div className="flex gap-3">
              <div className="flex flex-col justify-start">
                <div className="text-lg">Additional <br></br>Info:{' '}</div>
              </div>
              <textarea
                value={exp.suppInfo}
                type="text"
                className="border-2 w-1/2 px-1"
                onChange={e => {
                  console.log(exp);
                  dispatch({
                    id: exp.id,
                    type: 'editedExp',
                    section: 'edu',
                    blank: 'suppInfo',
                    content: e.target.value
                  })
                }}
                cols="30"
                rows="2"
              />
            </div>
          </label>
      </div>
    </form>
  )
}