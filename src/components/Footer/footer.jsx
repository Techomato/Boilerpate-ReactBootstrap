import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="bg-light p-6 mt-auto">
      <Container className="text-center">
        <Row>
          <Col>
            <h6>Footer Title</h6>
            <p>Something here to give the footer a purpose!</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
