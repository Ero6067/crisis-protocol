import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Avengers Mansion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">
                <i className="fas fa-space-shuttle me-1"></i>Home
              </Nav.Link>
              <Nav.Link href="/characters">
                <i className="fas fa-mask me-1"></i>Characters
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user me-1"></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
