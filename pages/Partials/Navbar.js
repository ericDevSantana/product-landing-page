import { Navbar, Nav } from 'react-bootstrap'

export default function NavigationBar() {

    return (
        <>
        <Navbar style={{backgroundColor: 'black', padding: '0 2% 0 2%', fontSize: '1.25vw'}} variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">My Product</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#testimonials">Consumers</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>

    )

}