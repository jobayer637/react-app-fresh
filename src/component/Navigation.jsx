import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'

function Navigation() {

    const navStyle ={
        btn: {
            color: 'white',
            textDecoration: 'none',
            margin: '0px 10px',
            border: '1px solid black',
            padding: '5px 10px',
            backgroundColor: 'indigo'
        }
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    
                    <Link to='/'><Navbar.Brand>REACT</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Link exact to='/'><Nav style={navStyle.btn}>Home</Nav></Link>
                        <Link exact to='/blog'><Nav style={navStyle.btn}>Blog</Nav></Link>
                        <Link exact to='/about'><Nav style={navStyle.btn}>About</Nav></Link>
                        <Link exact to='/contact'><Nav style={navStyle.btn}>Contact</Nav></Link>
                        <Logout />
                        {/* <Login /> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
