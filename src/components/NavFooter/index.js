import { Link } from 'react-router-dom';

import { Container, Iconcolor, Col, ColumnCenter, Button, Form, Ul, H6, Social } from './styles';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";




function Footer() {



    return (
        <>

            <Container>
                <Iconcolor>
                    <Social>
                        <Link to={{ pathname: 'https://www.facebook.com' }} target='_blank'><FaFacebookSquare color='black' /></Link>
                    </Social>
                    <Social>
                        <Link to={{ pathname: 'https://www.instagram.com' }} target='_blank'><FaInstagram color='black' /></Link>
                    </Social>
                    <Social>
                        <Link to={{ pathname: 'https://www.twitter.com' }} target='_blank'><FaTwitter color='black' /></Link>
                    </Social>
                    <Social>
                        <Link to={{ pathname: 'https://www.linkedin.com' }} target='_blank'><FaLinkedin color='black' /></Link>
                    </Social>
                </Iconcolor>
                {/* Column1 */}
                <ColumnCenter>
                    <Col>
                        <H6>
                            INFORMATION
                        </H6>
                        <Ul>
                            <Link to='/about'><li>About</li></Link>
                            <Link to=''><li>Customer Service</li></Link>
                            <Link to=''><li>Reward Program</li></Link>
                            <Link to=''><li>Shipping & Returns</li></Link>
                            <Link to=''><li>Privacy Policy</li></Link>
                            <Link to=''><li>Terms & Conditions</li></Link>
                        </Ul>
                    </Col>
                    {/* Column2 */}
                    <Col>
                        <H6>
                            CUSTOMER SERVICE
                        </H6>
                        <Ul>
                            <Link to=''><li>Search Terms</li></Link>
                            <Link to=''><li>Advanced Search</li></Link>
                            <Link to=''><li>Orders and Returns</li></Link>
                            <Link to=''><li>Contact Us</li></Link>
                            <Link to=''><li>Theme FAQs</li></Link>
                            <Link to=''><li>Consultant</li></Link>
                        </Ul>
                    </Col>
                    {/* Column3 */}
                    <Col>
                        <H6>
                            <h6>SHOP</h6>
                        </H6>
                        <Ul>
                            <Link to=''><li>New In</li></Link>
                            <Link to=''><li>Women</li></Link>
                            <Link to=''><li>Men</li></Link>
                            <Link to=''><li>Shoes</li></Link>
                            <Link to=''><li>Bags & Accessories</li></Link>
                            <Link to=''><li>Top Brands</li></Link>
                            <Link to=''><li>Sale & Special Offers</li></Link>
                            <Link to=''><li>Lookbook</li></Link>
                        </Ul>
                    </Col>
                    <Col>
                    <H6>
                            SIGN UP FOR OUR NEWSLETTER
                        </H6>
                        <Form>
                            <input placeholder="Email" name="email" type="email" ></input>
                            <Button variant="secondary" type="submit">SUBMIT</Button>
                        </Form>
                    </Col>
                </ColumnCenter>
            </Container>
        </>
    );
}

export default Footer;