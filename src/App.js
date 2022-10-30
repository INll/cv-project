import React, { useState } from 'react';
import Header from './components/Header';
import MainForm from './components/MainForm';
import Section from './components/Section';

function App() {
  return (
    <>
      <Header />
      <MainForm>
        <Section config='general' />
        <Section config='general' />
        <Section config='general' />
      </MainForm>
    </>
  );
}

export default App;
