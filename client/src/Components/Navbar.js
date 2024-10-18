// NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
  const styles = {
   
    navbarBrand: {
      // padding:'1%',
      fontSize: '40px',
      fontWeight: 'bold',
      marginLeft: '2%',
      fontFamily:"'Cute Font', sans-serif",
      color: 'black',
      marginRight: '60%',
    },
    wkjfhb: {
      fontSize: '20px',
      fontWeight: '500',
    },
    
  }
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Sixtyfour&display=swap" rel="stylesheet"/>
      {/* Other head elements */}
    </head>
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#" style={styles.navbarBrand}>
      メAKSHAY࿐
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarButtonsExample" />
      <Navbar.Collapse id="navbarButtonsExample">
        <Nav className="me-auto" style={styles.whebf}>
          <Nav.Link style={styles.wkjfhb} href="#">Home</Nav.Link>
        
          <Nav.Link style={styles.wkjfhb} href="#">Resume</Nav.Link>
          <Nav.Link style={styles.wkjfhb} href="#">Skills</Nav.Link>
          <Nav.Link style={styles.wkjfhb} href="#">Projects</Nav.Link>
          <Nav.Link style={styles.wkjfhb} href="#">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </html>
  );
};

export default NavBar;
