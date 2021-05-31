import React, { } from 'react';
import { FormTotal, Button, HeaderR, FormR, Div } from './styles';
import { Form, Col } from 'react-bootstrap';

import Navtop from '../../components/Navbar';
import Footer from '../../components/NavFooter';


const Login = () => {



    return (
        <>
            <Navtop />

            <FormTotal>
                <div>

                    <HeaderR>
                        <h2>Login</h2>
                    </HeaderR>
                    <Form.Row>
                        <Form.Group as={Col} md={12}>
                            <Form.Label type='email' value='' >Email: </Form.Label>
                            <Form.Control type='email' name='user' />
                        </Form.Group>
                        <Form.Group as={Col} md={12}>
                            <Form.Label type='password' >Password: </Form.Label>
                            <Form.Control type='password' name='password' />
                        </Form.Group>
                    </Form.Row>
                    <Button >
                        <p type='button' >Login</ p>
                    </Button>
                </div>
                <Div></Div>
                <FormR>
                    <div>

                        <HeaderR>
                            <h2>Register</h2>
                        </HeaderR>
                        <Form.Row>
                            <Form.Group as={Col} md={12}>
                                <Form.Label type='text' >Name: </Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Form.Group as={Col} md={12}>
                                <Form.Label type='email' >Email: </Form.Label>
                                <Form.Control type='email' />
                            </Form.Group>
                            <Form.Group as={Col} md={12}>
                                <Form.Label type='password' >Password: </Form.Label>
                                <Form.Control type='password' />
                            </Form.Group>
                        </Form.Row>
                        <Button >
                            <p type='submit'>Register</ p>
                        </Button>
                    </div>
                </FormR>
            </FormTotal>

            <Footer />
        </>
    )
}

export default Login;