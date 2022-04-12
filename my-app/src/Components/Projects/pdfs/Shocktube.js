import React from 'react'
import SinglePage from './pdf';

import samplePDF from "./shocktube.pdf";


export default function Shocktube() {
  return (
    <div>
        <SinglePage pdf={samplePDF}/>
    </div>
  )
}
