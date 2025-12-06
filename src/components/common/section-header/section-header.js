"use client";
import React from 'react'
import "./section-header.scss"

export const SectionHeader = ({second_title}) => {
  return (
    <h2 className='section-header'>{second_title}</h2>
  )
}