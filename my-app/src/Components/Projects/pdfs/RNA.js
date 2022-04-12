import React from 'react'
import SinglePage from './pdf';

import samplePDF from "./rna.pdf";


export default function RNA() {
  return (
    <div>
        <SinglePage pdf={samplePDF}/>
    </div>
  )
}

