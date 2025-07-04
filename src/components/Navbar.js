import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"

import logo from '../assets/logo.png'
import linkedinIcon from '../assets/linkedin-icon.svg'
import githubIcon from '../assets/github-icon.svg'
import youtubeIcon from '../assets/youtube-icon.svg'
import {NavLink, Link} from "react-router-dom";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as={Link} to="/home"><img src={logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{marginTop: '15px'}}>
                        <Nav.Link as={NavLink} to="/home" onClick={scrollToTop} activeClassName="active-link" >Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/experience" onClick={scrollToTop} activeClassName="active-link" >Experience</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects" onClick={scrollToTop} activeClassName="active-link" >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/shannonjliu/" target="_blank"><img src={linkedinIcon} alt="LinkedIn"/></a>
                            <a href="https://github.com/shannon-jliu" target="_blank"><img src={githubIcon} alt="GitHub"/></a>
                            <a href="https://www.youtube.com/@JerseyDrone" target="_blank"><img src={youtubeIcon} alt="YouTube"/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

