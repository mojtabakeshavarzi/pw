import { useEffect, useState } from "react";
import { Navbar , Container , Nav , NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/facebook.svg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

function NavBar() {
    const [activeLink , setActiveLink] = useState('home');
    const [scrolled , setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = ()=> {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll" , onScroll);
        return () => window.removeEventListener ("scroll" , onscroll);
    } , [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return ( 
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/mojtaba-keshavarzi-561460195/" target="_blank"> <img src={linkedin} alt="" /> </a>
                    <a href="https://github.com/mojtabakeshavarzi" target="_blank"> <img src={github} alt="" /> </a>
                    <a href="https://www.facebook.com/profile.php?id=100025758308477" target="_blank"> <img src={facebook} alt="" /> </a>
                </div>
                <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;