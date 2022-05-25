import React from 'react'
import SinglePage from './pdf';
import samplePDF from "./genderwagegap.pdf";

export default function GenderGap() {
  return (
    <div>
    <SinglePage pdf={samplePDF}/>
</div>
  )
}
