import { Navbar, Container, Nav } from 'react-bootstrap'


const Navigation = () => {
    return (
        <Navbar collapseOnSelect bg="white" expand="lg" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    Web Hosting
      </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#frontpage">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#Pricing">Pricing</Nav.Link>
                        <Nav.Link href="#learnmore">Learn More</Nav.Link>
                        <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
