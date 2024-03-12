import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPhp, FaBootstrap } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiMaterializecss,
} from "react-icons/di";
import {
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>JAVASCRIPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>NODE-JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>REACT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>Mongo-DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>NEXT-JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>REDUX</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>POSTGRESQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>MY-SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillThunderbolt />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>SOSL(Salesforce Object Search Language)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillThunderbolt />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>SOQL(Salesforce Object Query Language)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>BOOTSTRAP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>TAILWIND-CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMaterializecss />
        <div style={{ fontSize: '0.6rem', color: 'rgb(155 126 172)' }}>MATERIALIZE-CSS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
