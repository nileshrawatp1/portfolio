import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiZoho,
} from "react-icons/si";
import { FaLinux, FaSalesforce, FaGithub  } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>LINUX</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>VSCODE</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>POSTMAN</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>SLACK</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>VERCEL</div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>GITHUB</div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>SALESFORCE</div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiZoho />
        <div style={{fontSize:'0.6rem', color:'rgb(155 126 172)'}}>ZOHO</div> 
      </Col>
    </Row>
  );
}

export default Toolstack;
