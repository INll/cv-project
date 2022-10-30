import React, { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';

export default function Section({ config }) {
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  switch (config) {
    case 'general':
      return (
        <>
          <GeneralInfoForm />
        </>
      )
  }

  return (
    true
  );
}