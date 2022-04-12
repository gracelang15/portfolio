import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Button, Container, ButtonGroup, ButtonToolbar, Row, Col } from 'react-bootstrap';
import "./pdf.css"

export default function PDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
      <div className="text-center pdfs">
      <Row>
        <Col>
        <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
          <ButtonGroup className="me-2 mb-2">
          <Button variant="custom" disabled={pageNumber <=1} onClick={previousPage}>Previous</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2 mb-2">
          <Button variant="custom" disabled={pageNumber >=numPages} onClick={nextPage}>Next</Button>
          </ButtonGroup>
      </div>
        </Col>

      </Row>

    </div>
  );
}