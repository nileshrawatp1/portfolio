import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume_Nilesh-Rawat.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const calculateScale = (currentWidth) => {
    if (currentWidth > 900) return 1.43;
    if (currentWidth <= 900 && currentWidth > 800) return 1.2;
    if (currentWidth <= 800 && currentWidth > 700) return 1.1;
    if (currentWidth <= 700 && currentWidth > 480) return 0.8;
    return 0.5; // For smaller screens
};

function ResumeNew() {
    const [width, setWidth] = useState(window.innerWidth);
    const [scale, setScale] = useState(calculateScale(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            setScale(calculateScale(newWidth));
        };

        // Resize event listener
        window.addEventListener("resize", handleResize);

        return () => {
            // Cleanup resize event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume justify-content-center">
                    <div className="resume-pdf-container" style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
                        <Document file={pdf}>
                            <div style={{ marginBottom: "5px" }}>
                                <Page pageNumber={1} scale={scale} />
                            </div>
                            <Page pageNumber={2} scale={scale} />
                        </Document>
                    </div>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
