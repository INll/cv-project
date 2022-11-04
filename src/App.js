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
          console.log('matched')
          return {
            ...section,
            exp: section.exp.map((experienceObj) => {
              console.log(section);
              if (experienceObj.id === action.id) {
                return {
                  ...experienceObj,
                  [action.blank]: action.content
                }
              }
              return experienceObj;
            })
          }
        }
        return section;
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
                ...section.exp,
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
          return section;
        }
      );
    }
    case 'deletedExp': {
      return formData.map((section) => {
        if (section.section === 'exp') {
          return {
            ...section,
            exp: section.exp.filter(
              (experienceObj) => experienceObj.id !== action.id
            )
          };
        }
        return section;
      });
    }
    default: 
      console.log('Error, no matching case found');
  }
}

const initialData = [
  {
    section: 'generalInfo',
    name: '',
    email: '',
    telNo: ''
  },
  {
    section: 'edu',
    school: '',
    title: '',
    startDate: '',
    endDate: ''
  },
  {
    section: 'exp',
    exp: [
      {
        id: 0,
        companyName: '',
        position: '',
        expStart: '',
        expEnd: '',
        role: ''
      }
    ]
  }
]

export default App;
