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