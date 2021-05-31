import React, {  } from 'react';
import {  withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './styles';
import { Form, Col, Button } from 'react-bootstrap';

import Navtop from '../../components/Navbar';
import Footer from '../../components/NavFooter';

import useForm from '../../hooks/useForm';
import api from '../../services/api';



function Signup() {

    const [{ values, loading }, handleChange] = useForm();

    const enviarContato = () => {
        // faça o que for preciso :)
        console.log(values);
      };


      const handleSignUp = async e => {
        e.preventDefault();
        const { ... } = this.state;
        if (!email || !password || adress || adress2 || city || state || zip) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await api.post("/users", { email, password, adress, adress2, city, state, zip });
            this.props.history.push("/signin");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
      };

    return (
        <>
            <Navtop />

            <Container>
                <Form onSubmit={handleSignUp(enviarContato)} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter email"
                            required="true"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required="true"
                        />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control
                            name="adress"
                            placeholder="1234 Main St"
                            onChange={handleChange}
                            required="true"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control 
                        name="adress2"
                        placeholder="Apartment, studio, or floor" 
                        onChange={handleChange}
                        required="true"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                            name="city"
                            placeholder="City"
                            onChange={handleChange}
                            required="true"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control 
                            name="state" 
                            as="select" 
                            defaultValue="Choose..." 
                            onChange={handleChange}
                            required="true">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control 
                            name="zip" 
                            onChange={handleChange} 
                            required="true"
                            />
                        </Form.Group>
                    </Form.Row>



                    <Button variant="primary" type="submit" >
                    {loading ? 'Enviando...' : 'Enviar'}
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    )
}

export default withRouter(Signup);
