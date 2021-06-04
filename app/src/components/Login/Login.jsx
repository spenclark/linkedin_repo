import React from "react"
import {Nav, Container } from "./LoginStyledComponents"
const Login = props => {
    return ( 
        <Container>
            <Nav>
                <a href="/" >
                    <img src="/assets/login-logo.svg" alt="This should have been an image." />
                </a>
            </Nav>

        </Container>
    )
}



export default Login