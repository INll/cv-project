import React from 'react';

export default function Header() {
  return (
    <div className="banner flex max-w-full bg-teal-100 h-[6.5rem] shadow-lg text-lg">
      <div className="titleText relative self-center font-bold text-4xl mx-auto bottom-1">
        EZ CV Maker Free
        <div className="flashingText absolute w-max font-bold text-xs md:-rotate-3 px-auto md:left-24">The most professional CV maker... now available for FREE!!</div>
      </div>
    </div>
  )
}