import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textconvertor from "../../Assets/Projects/textConversion.png";
import newsApp from "../../Assets/Projects/newsApp.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import keyStroke from "../../Assets/Projects/key-stroke.png";
import keyDrum from "../../Assets/Projects/key-drum.png";
import eKart from "../../Assets/Projects/eKart.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyStroke}
              isBlog={false}
              title="Key Stroke Code"
              description="Discover an interactive tool that instantly displays JavaScript event keycodes as you press any key on your keyboard. Enhance your web development skills with real-time keycode feedback and learn keyboard events effortlessly."
              ghLink="https://github.com/nileshrawatp1/keystroke-code"
              demoLink="https://keystroke-code.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyDrum}
              isBlog={false}
              title="Drum Kit"
              description="Discover an interactive tool that instantly plays the drum from the specific keyboards keys press on the tab. You can listen and create the drump as per your choice. This project is created by just using HTML, CSS and javaScript. Feel free to send the feedback any case of any concerns."
              ghLink="https://github.com/nileshrawatp1/JS-Drum-kit"
              demoLink="https://nileshrawatp1.github.io/JS-Drum-kit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eKart}
              isBlog={false}
              title="eKart Project"
              description="Discover an interactive tool that Discover a world of amazing products, all at your fingertips. Our e-commerce website offers a wide range of high-quality items, from the latest fashion trends and electronics to home essentials and unique gifts. We bring together a curated collection of brands and products to make your shopping experience enjoyable and hassle-free."
              ghLink="https://github.com/nileshrawatp1/bhuppi-ecommerce"
              demoLink="https://bhuppi-ecommerce.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
