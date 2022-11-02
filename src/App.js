import React, { useState, useReducer } from 'react';
import { FormUpdateContext, FormUpdateDispatchContext } from './components/FormUpdateContext';
import GeneralInfoForm from './components/GeneralInfoForm';
import Header from './components/Header';
import MainForm from './components/MainForm';
import ExperienceForm from './components/ExperienceForm';

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
      </FormUpdateContext.Provider>
    </>
  );
}

function formDataReducer(formData, action) {
  switch (action.type) {
    case 'edit': {
      return formData.map(d => {
        if (d.section === action.task.section) {
          return action.task;
        } else {
          return d;
        }
      });
    }
    case 'addExp': {

    }
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
        companyName: 'test',
        position: 'test',
        from: 'test',
        to: 'test',
        role: 'test'
      }, 
    ]
  }
]

export default App;
