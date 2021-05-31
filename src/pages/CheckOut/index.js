import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Container, } from 'react-bootstrap';
import Navtop from '../../components/Navbar';
import Footer from '../../components/NavFooter';
import CheckoutForm from './form';
import Pix from '../../store/checkout';


import { Top, ButtonMet, FormTotal } from './styles';
import { FaRegCreditCard, FaPaypal, } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



const CheckOut = () => {

    const ELEMENTS_OPTIONS = {
        fonts: [
            {
                cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
            }
        ]
    };

    const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

    const Boleto = () => {
        alert('Boleto sent to email');
    }


    return (
        <>
            <Navtop />
            <Container>
                <Top>
                    <h2>Billing Info</h2>
                    <p>Choose a payment option below and fill out the aproriate infomation</p>

                    <div>
                        <ButtonMet><FaRegCreditCard size='2rem' color='#deaa0c' /> Credit Card</ButtonMet>
                        <ButtonMet><Link to={{ pathname: 'https://www.paypal.com/br/signin' }} target='_blank'><FaPaypal size='2rem' color='#deaa0c' />PayPal</Link></ButtonMet>
                        <Pix />
                        <ButtonMet onClick={Boleto}><RiBankLine size='2rem' color='#deaa0c' />Boleto</ButtonMet>
                    </div>

                </Top>
                <FormTotal >
                    <div className="AppWrapper">
                        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </FormTotal>

            </Container>
            <Footer />
        </>
    );
}

export default CheckOut;