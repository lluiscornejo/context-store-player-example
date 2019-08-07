import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-simple-styled-grid';

const Layout = ({ children }) => (
  <Fragment>
    <header>
      <Container>
        <Row>
          <Col>
            Player
          </Col>
        </Row>
      </Container>
    </header>
    <main>
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </main>
  </Fragment>
);

export default Layout;
