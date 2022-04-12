import React from 'react'
import SinglePage from './pdf';

import samplePDF from "./referral.pdf";


export default function Referral() {
  return (
    <div>
        <SinglePage pdf={samplePDF}/>
    </div>
  )
}
