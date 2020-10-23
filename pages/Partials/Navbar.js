import {Navbar, Nav} from 'react-bootstrap'

export default function NavigationBar() {

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">My Product</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Features</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>

    )

}