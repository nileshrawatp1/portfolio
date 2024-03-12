import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textconvertor from "../../Assets/Projects/textConversion.png";
import newsApp from "../../Assets/Projects/newsApp.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textconvertor}
              isBlog={false}
              title="Text Convertor App"
              description="Online text conversion app build with ReactJS only to help convert text from lower to uppar. Also includes github markdown table of conent. It help text in encoding and decoding aswell. Suports dark mode as well with easy to use UI."
              ghLink="https://github.com/nileshrawatp1/textConversion"
              demoLink="https://nilesh-text-conversion.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp}
              isBlog={false}
              title="Pocket-News"
              description="My news app page build with React.js and Bootstrap Css which takes the news from news API and shows on the screen in defferent categories. The APi is just use for local server. So, can't make it live yet."
              ghLink="https://github.com/nileshrawatp1/pocket-news"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Code Conline"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage."
              ghLink="https://github.com/nileshrawatp1/Code-Editor"
              demoLink="https://nilesh-code-editor.vercel.app"
            />
          </Col>

        </Row> 
      </Container>
    </Container>
  );
}

export default Projects;
