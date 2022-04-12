import React from 'react'
import SinglePage from './pdf';

import samplePDF from "./imageRetrieval.pdf";


export default function imageRetrieval() {
  return (
    <div>
        <SinglePage pdf={samplePDF}/>
    </div>
  )
}
