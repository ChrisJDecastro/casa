import React from "react";
import { Card, Row, Col,Button } from "react-bootstrap";
import "./Landing.css";
import * as Icon from "react-bootstrap-icons";

const Landing = () => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}  lg={{ span: 4, offset: 4 }} xl={{ span: 3, offset: 4 }}>
        <Card className="text-center" border="secondary">
          <Card.Body>
            <Row xs={12} md={12}>
                <h4 className="name">Christopher De Castro</h4>
            </Row>
            <Row >
              <Col xs={{span:2,offset:2}} md={2} lg={2} xl={{span:2,offset:2}}>
                <a href="https://www.youtube.com/channel/UCSLRhw9LLu6N8ow8u2kT5aQ" target="_blank" rel="noopener noreferrer">
                  <Icon.Youtube  color="black" />
                </a>
              </Col>
              <Col xs={2} md={2} lg={2} xl={2}>
                <a href="https://www.instagram.com/chrisjdecastro/" target="_blank" rel="noopener noreferrer">
                  <Icon.Instagram color="black"/>
                </a>
              </Col>
              <Col xs={2} md={2} lg={2} xl={2}>
                <a href="https://twitter.com/chrisjdecastro" target="_blank" rel="noopener noreferrer">
                  <Icon.Twitter color="black"/>
                </a>
              </Col>
              <Col xs={2} md={2} lg={2} xl={2}>
                <a href="https://github.com/ChrisJDecastro" target="_blank" rel="noopener noreferrer">
                  <Icon.Github color="black"/>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Landing;
