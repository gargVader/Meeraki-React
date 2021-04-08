import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';

ReactDOM.render(
  <React.StrictMode>

    <Container>
      <Row>

        <Col md={3}> <App id={0} /> </Col>
        <Col md={3}> <App id={1} /> </Col>
        <Col md={3}> <App id={0} /> </Col>
        <Col md={3}> <App id={1} /> </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={3}> <App id={0} /> </Col>
        <Col md={3}> <App id={1} /> </Col>
        <Col md={3}> <App id={0} /> </Col>
      </Row>
    </Container>

  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
