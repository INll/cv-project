import React, { useContext } from "react";
import Experience from "./Experience";

let nextId = 1;

// Take experience form input as children
export default function ExperienceForm() {
  const formData = useContext(FormUpdateDataContext);
  const dispatch = useContext(FormUpdateDispatchContext);

  // Not yet implemented
  function handleSaveEditedExperience(newValues) {
    const nextId = experienceList.length - 1;
    setExperienceList(
      [
        ...experienceList,
        {
          id: nextId,
          companyName: newValues.companyName,
          position: newValues.position,
          from: newValues.from,
          to: newValues.to,
          role: newValues.role
        }
      ]
    )
  }

  // To be reduced
  function handleAddExperience() {
    setExperienceList(
      [
        ...experienceList,
        {
          id: nextId++,
          companyName: '',
          position: '',
          from: '',
          to: '',
          role: ''
        }
      ]
    )
  }

  // To be reduced
  function handelDeleteExperience(toBeRemovedExpId) {
    console.log(experienceList);
    if (experienceList.length == 1) {return};
    setExperienceList(
      experienceList.filter(
      exp => {
        if (exp.id == toBeRemovedExpId) {console.log(`${exp.id} is being removed.`)};
        return (
          exp.id !== toBeRemovedExpId
        );}
      )
    );
    console.log(experienceList);
  }

  return (
    <>
      <div className="experience flex flex-col mx-10 my-10 gap-10">
        <div className="title font-bold uppercase text-5xl tracking-wider 
        text-stone-900">PRACTICAL EXPERIENCE</div>
          {formData[2].exp.map((exp) => (
            <Experience 
              exp={exp}
            />
          ))}
        <button className="w-full pb-2 text-3xl bg-slate-100 hover:bg-slate-200
         active:bg-slate-300 font-extrabold text-slate-400
          active:text-slate-500" onClick={() => {
            dispatch({
              type: 'added',
              id: nextId++,
              companyName: '',
              position: '',
              from: '',
              to: '',
              role: ''
            })
          }}>+</button>
      </div>
    </>
  )

}