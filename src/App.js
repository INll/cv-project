import React, { useState, useReducer } from 'react';
import { FormUpdateDataContext, FormUpdateDispatchContext } from './components/FormUpdateContext';

import GeneralInfoForm from './components/GeneralInfoForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import MainForm from './components/MainForm';
import Preview from './components/Preview';

let nextIdExp = 1;
let nextIdEdu = 1;

function App() {
  const [formData, dispatch] = useReducer(
    formDataReducer, 
    initialData
  );
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      <FormUpdateDataContext.Provider value={formData}>
        <FormUpdateDispatchContext.Provider value={dispatch}>
          <div className="banner flex w-full bg-teal-100 h-[6.5rem]
           shadow-lg text-lg">
            <div className="titleText relative self-center font-bold
             text-4xl mx-auto bottom-1">
              EZ CV Maker Free
            <div className="flashingText absolute w-max font-bold text-xs 
              md:-rotate-3 px-auto md:left-24">
                The most professional CV maker... now available for FREE!!</div>
          </div>
          </div>
          <MainForm
            isEditing={isEditing}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
            <ul className="divide-y p-2 w-full">
              <li>
                  <GeneralInfoForm info={formData[0]} />
              </li>
              <li>
                <EducationForm />
              </li>
              <li>
                <ExperienceForm />
              </li>
            </ul>
             ) : (
              <Preview />)}
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
        console.log(section);
        console.log(action);
        if (section.section === action.section) {
          console.log('match');
          return {
            ...section,
            [action.blank]: action.content
          }
        }
        console.log(formData);
        return section;
      })
    }
    case 'editedExp': {
      return formData.map((section) => {
        if (section.section === action.section) {
          return {
            ...section,
            exp: section.exp.map((experienceObj) => {
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
          if (section.section === action.section) {
            if (action.section === 'exp') {
              // Copy and return a new object
              return {
                ...section,
                // Where the exp value is a new array containing a new experience
                exp: [
                  ...section.exp,
                  {
                    id: nextIdExp++,
                    companyName: '',
                    position: '',
                    expStart: '',
                    expEnd: '',
                    role: ''
                  }
                ]
              }
            } else if (action.section === 'edu') {
              return {
                ...section,
                exp: [
                  ...section.exp,
                  {
                    id: nextIdEdu++,
                    school: '',
                    degree: "",
                    eduStart: '',
                    eduEnd: '',
                    suppInfo: ''
            
                  }
                ]
              }
            }
          }
          return section;
        }
      );
    }
    case 'deletedExp': {
      return formData.map((section) => {
        if (section.section === action.section) {
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
    name: 'Tom Leung',
    email: 'tomleung2008@gmail.com',
    telNo: '(+852) 1234 5678',
    selfIntro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio beatae explicabo recusandae ipsam blanditiis, perferendis tempore voluptates quae sunt! Laborum quam obcaecati, esse laudantium assumenda dicta nihil exercitationem ullam."
  },
  {
    section: 'edu',
    exp: [
      {
        id: 0,
        school: 'Big University of Hong Kong',
        degree: "Engineering",
        eduStart: '2018-09-01',
        eduEnd: '2022-09-01',
        suppInfo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, magnam modi officia atque explicabo odit officiis omnis cumque sint consectetur accusamus!'
      }
    ]
  },
  {
    section: 'exp',
    exp: [
      {
        id: 0,
        companyName: 'Good company',
        position: 'Web devloper',
        expStart: '2022',
        expEnd: '2024',
        role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, magnam modi officia atque explicabo odit officiis omnis cumque sint consectetur accusamus! Vitae in fugiat voluptatem deserunt consequuntur ipsa officiis aliquam?'
      },
      {
        id: 1,
        companyName: 'Bad company',
        position: 'Intern',
        expStart: '2022',
        expEnd: '2024',
        role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim quia culpa, nesciunt expedita similique excepturi, laudantium hic voluptate qui quo sunt perferendis rem, deleniti molestias! Unde ad recusandae voluptatum.'
      }
    ]
  }
]

export default App;