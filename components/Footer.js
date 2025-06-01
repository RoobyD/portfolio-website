import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-img1.png";
import navIcon1 from "../assets/img/linked-in.svg"; // Linked IN 
import navIcon2 from "../assets/img/github-icon.svg"; // Github
import navIcon3 from "../assets/img/contact-img.svg";  //Contact

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
                  <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rooby-dartiny-99b89a256/"><img src={navIcon1} alt="Icon"  style={{width: '40px', height: '40px'}} /></a>
              <a href="https://github.com/RoobyD"><img src={navIcon2} alt="Icon"  style={{width: '40px', height: '40px'}}/></a> 
              <a href="#connect"><img src={navIcon3} alt="Icon"  style={{width: '40px', height: '40px'}}/></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
