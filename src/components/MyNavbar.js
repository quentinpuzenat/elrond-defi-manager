import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {

    return ( 
        <>
        <Navbar collapseOnSelect expand="lg" bg='dark' variant="dark" >
            <Container>
            <Navbar.Brand href="/">DeFi Manager 👨‍🌾</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
     );
}
 
export default MyNavbar;