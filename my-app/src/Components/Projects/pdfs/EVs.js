import React from 'react'
import SinglePage from './pdf';

import samplePDF from "./EVs.pdf";


export default function Evs() {
  return (
    <div>
        <SinglePage pdf={samplePDF}/>
    </div>
  )
}
