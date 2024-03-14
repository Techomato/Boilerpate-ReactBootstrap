import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const navItems = ["Home", "About", "Contact"];

export const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand href="#home">MUI</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse id="offcanvasNavbar" className="justify-content-end">
            <Nav>
              {navItems.map((item, idx) => (
                <Nav.Link key={idx} href={`#${item.toLowerCase()}`}>
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement={"start"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MUI</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item, idx) => (
              <Nav.Link key={idx} href={`#${item.toLowerCase()}`}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
