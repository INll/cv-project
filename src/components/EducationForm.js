import React, { useContext } from 'react';
import { FormUpdateDataContext, FormUpdateDispatchContext } from './FormUpdateContext';
import Education from './Education';


export default function EducationForm() {
  const formData = useContext(FormUpdateDataContext);
  const dispatch = useContext(FormUpdateDispatchContext);

  return (
    <>
      <div className="education flex flex-col mx-10 my-10 gap-8">
      <div className="title font-bold uppercase text-5xl tracking-wider
       text-stone-900">EDUCATION</div>
       {formData[1].exp.map((exp) => (
        <Education 
          exp={exp}
        />
       ))}
        <button className="w-full pb-2 text-3xl bg-slate-100 hover:bg-slate-200
         active:bg-slate-300 font-extrabold text-slate-400
          active:text-slate-500" onClick={() => {
            dispatch({
              type: 'addedExp',
              section: 'edu'
            })
          }}>+</button>
      </div>
    </>
  );
}


        {/* <label className="relative w-[24.8rem] text-xl h-10">
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
            className="name border-2 left-24 w-[7.7rem] absolute px-1"
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
            className="name border-2 left-[18rem] w-[7.7rem] absolute px-1"
          />
        </label> */}