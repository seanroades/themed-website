import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import './Header.scss'
import logo from '../../../images/realm_black.png'
import '../../../App.scss'

function Header() {
  return (
    <div className="HeaderContainer">
      <Navbar expand="lg">
          <Navbar.Brand>
            <img src={logo} width={"200px"}></img>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="XSmallTitlePrimary">About</Nav.Link>
            <Nav.Link className="XSmallTitlePrimary">Academy</Nav.Link>
            <Nav.Link className="XSmallTitlePrimary">Developments</Nav.Link>
            <Navbar.Text>
              <Button className="custom-btn XSmallTitlePrimary">Investor Portal</Button>
            </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;