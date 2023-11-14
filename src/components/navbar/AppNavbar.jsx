import {Navbar, Nav, NavDropdown, Button, Modal} from "react-bootstrap";
import Logo from "./../../assets/logo/50PX.png";
import {useState} from "react";

function AppNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <div className='container'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Item className='me-3'>
                <Nav.Link href='#'>
                  <i className='bi bi-envelope text-light'></i>
                  <small className='ms-2 text-light'>
                    Aljongabrielambasvaldez@gmail.com
                  </small>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>
                  <i className='bi bi-telephone text-light'></i>
                  <small className='ms-2 text-light'>+63-9397179384</small>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Navbar bg='dark' variant='dark' expand='lg'>
        <div className='container'>
          <Navbar.Brand href='#'>
            <img
              alt=''
              src={Logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            Agav
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarSupportedContent' />
          <Navbar.Collapse id='navbarSupportedContent'>
            <Nav className='me-auto'>
              <Nav.Link href='#' className='active'>
                <i className='bi bi-house'></i>
                <span className='ms-2'>About</span>
              </Nav.Link>
              <Nav.Link
                href='https://github.com/AljonGabriel'
                target='_blank'
                rel='noreferrer'
              >
                <span className='d-flex align-items-center'>
                  <i className='bi bi-git'></i>
                  <span className='ms-2'>Github</span>
                </span>
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    <i className='bi bi-braces'></i>
                    <small className='ms-2'>Projects</small>
                  </span>
                }
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item
                  href='https://github.com/AljonGabriel/Inventory_System'
                  target='_blank'
                  rel='noreferrer'
                >
                  Inventory System
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://github.com/AljonGabriel/Aplaysale'
                  target='_blank'
                  rel='noreferrer'
                >
                  Aplaysale
                </NavDropdown.Item>

                <NavDropdown.Item
                  href='https://aljongabriel.github.io/AiQuee/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Aiquee
                </NavDropdown.Item>

                <NavDropdown.Item
                  href='https://aljongabriel.github.io/guessing_game/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Guessing Game
                </NavDropdown.Item>

                <NavDropdown.Item
                  href='https://aljongabriel.github.io/tic-tac-toe/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Tic-Tac-Toe
                </NavDropdown.Item>

                <NavDropdown.Item
                  href='https://aljongabriel.github.io/Prime_Number/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Prime Number
                </NavDropdown.Item>

                <NavDropdown.Item
                  href='https://aljongabriel.github.io/Odd_Even_Number/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Odd Even Number
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span>
                    <i className='bi bi-hand-thumbs-up'></i>
                    <small className='ms-2'>Social</small>
                  </span>
                }
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item
                  href='https://www.facebook.com/aljon.gabriel.391'
                  target='_blank'
                  rel='noreferrer'
                >
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://www.linkedin.com/in/aljon-gabriel-valdez-822901171'
                  target='_blank'
                  rel='noreferrer'
                >
                  Linked-in
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://www.youtube.com/channel/UCTgwmp5DAlCWtEJkkXHTRyg'
                  target='_blank'
                  rel='noreferrer'
                >
                  YouTube
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant='primary' onClick={handleShow}>
              Future Plans
            </Button>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Project list</Modal.Title>
              </Modal.Header>
              <small className='mx-3'>
                Legend: <small className='text-success mx-1'>Done </small>
                <small className='text-secondary mx-1'>Ongoing </small>
              </small>
              <Modal.Body>
                <ul>
                  <li className='text-secondary'>Social Website Mern</li>
                  <li className='text-secondary'>
                    AplaySale - Ecommerce Website
                  </li>
                  <li className='text-success'>
                    Inventory Management System MERN
                  </li>
                </ul>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default AppNavbar;
