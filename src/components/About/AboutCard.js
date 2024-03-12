import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nilesh Rawat </span>
            from <span className="purple"> Faridabad, India.</span>
            <br />
            I am currently employed as a Sr. Product Developer at Ameyo.
            <br />
            I have completed Bechlors of Technology (B.Tech) in Computer Science at Lingayas GVKS University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nilesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
