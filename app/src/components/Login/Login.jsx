import React from "react"
import {Nav, Container, Join, SignIn, Section, Hero, Form, Google} from "./LoginStyledComponents"
const Login = props => {
    return ( 
        <Container>
            <Nav>
                <a href="/" >
                    <img src="/assets/login-logo.svg" alt="This should have been an image." />
                </a>
                <div>
                <Join>
                Join Now
            </Join>
            <SignIn>
                Sign In
            </SignIn>
            </div>
            </Nav>
            <Section>
                <Hero >
                <h1>Welcome to your professional community</h1>

                <img src="/assets/login-hero.svg"></img>
                </Hero>
                <Form>
                    <Google>
                        <img src="/assets/google.svg"></img> 
                        <p>Sign in with Google</p>
                    </Google>
                </Form>
            </Section>

            
            
        </Container>
    )
}



export default Login