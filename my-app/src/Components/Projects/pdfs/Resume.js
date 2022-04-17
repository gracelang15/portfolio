import React from 'react'
import AllPages from './pdfResume';

import samplePDF from "./Resume2.pdf";

export default function Resume() {
  return (
    <AllPages pdf={samplePDF}/>
  )
}
