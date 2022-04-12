import React from 'react'
import SinglePage from './pdf';

import samplePDF from "./citybike.pdf";


export default function RNA() {
  return (
    <div>
        <SinglePage pdf={samplePDF}/>
    </div>
  )
}
