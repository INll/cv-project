import React, { useState, useReducer } from 'react';
import { FormUpdateDataContext, FormUpdateDispatchContext } from './components/FormUpdateContext';

import GeneralInfoForm from './components/GeneralInfoForm';
import Header from './components/Header';
import MainForm from './components/MainForm';
import ExperienceForm from './components/ExperienceForm';

let nextId = 1;

function App() {
  const [formData, dispatch] = useReducer(
    formDataReducer, 
    initialData
  );
  // const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <FormUpdateDataContext.Provider value={formData}>
        <FormUpdateDispatchContext.Provider value={dispatch}>
          <Header />
          <MainForm>
            <ul className="divide-y p-2">
              <li>
                <GeneralInfoForm />
              </li>
              {/* {isEditing ? <Section config='general' /> :
                <GeneralInfo />
              } */}
              <li>
                <ExperienceForm />
              </li>
            </ul>
          </MainForm>
        </FormUpdateDispatchContext.Provider>
      </FormUpdateDataContext.Provider>
    </>
  );
}

function formDataReducer(formData, action) {
  switch (action.type) {
    case 'editedInput': {
      return formData.map((section) => {
        if (section.section === action.section) {
          return {
            ...section,
            exp: [
              ...exp,
              exp.map(experience => {
                return {
                  ...experience,
                  [action.blank]: [action.content]
                }
              })
            ]
          }
        }
      })
    }

    case 'addedExp': {
        // Select only the third object containing info for 'exp'
        return formData.map((section) => {
          if (section.section === 'exp') {
            // Copy and return a new 'exp' object
            return {
              ...section,
              // Where the exp value is a new array containing a new experience
              exp: [
                ...exp,
                {
                  id: nextId++,
                  companyName: '',
                  position: '',
                  expStart: '',
                  expEnd: '',
                  role: ''
                }
              ]
            }
          }
        }
      );
    }
    case 'deletedExp': {
        return formData.map((section) => {
          if (section.section === 'exp') {
            return {
              ...section,
              exp: [
                ...exp,
                exp.filter(experience =>
                  experience.id !== action.id
                )
              ]
            };
          }
        }
      )
    }
    case 'newdeletedExp': {
      return {

      }
    }
  }
}

const initialData = {
  generalInfo: {
    name: '',
    email: '',
    telNo: ''
  },
  edu: {
    school: '',
    title: '',
    startDate: '',
    endDate: ''
  },
  exp: {
    0: {
      companyName: '',
      position: '',
      from: '',
      to: '',
      role: ''
    }
  }
}

export default App;
