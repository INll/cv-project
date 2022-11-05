import React, { useContext } from 'react';
import { FormUpdateDispatchContext } from './FormUpdateContext';


export default function GeneralInfoForm({ info }) {
  const dispatch = useContext(FormUpdateDispatchContext);
  
  return (
    <div className="general-info flex flex-col mx-10 my-10 gap-8">
    <div className="title font-bold uppercase text-5xl 
      tracking-wider text-stone-900">GENERAL INFO</div>
      <form className="general-info-form" action="">
        <div className="flex-container flex flex-col gap-2">
          <label className="relative text-xl h-10">
            <div className="absolute">Name:{' '}</div>
            <input
              value={info.name}
              type="text" 
              className="name border-2 absolute left-24 w-1/2 px-1"
              onChange={e => {
                dispatch({
                  type: 'editedInput',
                  section: 'generalInfo',
                  blank: 'name',
                  content: e.target.value
                })
              }}
            />
          </label>
          <label className="relative text-xl h-10">
            <div className="absolute">Email:{' '}</div>
            <input 
              value={info.email}
              type="text" 
              className="name border-2 absolute left-24 w-1/2 px-1"
              onChange={e => {
                dispatch({
                  type: 'editedInput',
                  section: 'generalInfo',
                  blank: 'email',
                  content: e.target.value
                })
              }}
            />
          </label>
          <label className="relative text-xl h-10">
            <div className="absolute">Tel. No:{' '}</div>
            <input 
              value={info.telNo}
              type="text" 
              className="name border-2 absolute left-24 w-1/2 px-1"
              onChange={e => {
                dispatch({
                  type: 'editedInput',
                  section: 'generalInfo',
                  blank: 'telNo',
                  content: e.target.value
                })
              }}
            />
          </label>
          <label className="text-xl">
            <div className="flex gap-3">
              <div className="flex flex-col justify-start">
                <div>Self Intro:{' '}</div>
                <div className="text-sm font-light italic text-neutral-900">(Not too long!)</div>
              </div>
              <textarea
                value={info.selfIntro}
                type="text"
                className="border-2 w-1/2 px-1"
                onChange={e => {
                  dispatch({
                    type: 'editedInput',
                    section: 'generalInfo',
                    blank: 'selfIntro',
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
  </div>
  )
}