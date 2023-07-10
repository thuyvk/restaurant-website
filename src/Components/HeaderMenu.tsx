import './HeaderMenu.css'
import { Nav, Navbar, Container } from 'react-bootstrap';

const HeaderMenu = () => {
    return (
        <Navbar expand="lg" className="bg-body-restaurant">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-end">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/about">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default HeaderMenu;