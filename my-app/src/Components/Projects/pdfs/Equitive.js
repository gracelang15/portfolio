import React from 'react'
import SinglePage from './pdf';
import { Navbar, Nav, Container, Image, Card, Col, Row, Button, CardGroup } from 'react-bootstrap'

import samplePDF from "./equitive.pdf";
import { useHref } from 'react-router-dom';


export default function Equitive() {
    return (
        <div className="text-center">
            <div className='video'>
                <iframe className='mt-3'
                    src='https://www.youtube.com/embed/v3QNAwu3wq8'
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    height="400px"
                    width="600px"
                />
                <div>
                <Button variant="link" href='https://equitive-demo.web.app/'>equitive-demo.web.app</Button>
                </div>
                <SinglePage pdf={samplePDF} />


            </div>
        </div>
    )
}
