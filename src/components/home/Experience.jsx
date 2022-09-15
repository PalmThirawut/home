import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section bg-light" id="experiences">
      <Container>
        <Jumbotron className="bg-light">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard  key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
      <hr className="dotted"></hr>
    </section>
  );
}

export default Experience;