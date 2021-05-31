import React, {} from 'react';
import {Link} from 'react-router-dom';

import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { Mainfooter, Iconcolor, IL, H6, Social} from './styles';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";




const Footer = () => {



    return(
      <footer>
        
        <Mainfooter>
        <Container>
            <Iconcolor>
            <Row className="justify-content-md-center">
                <Social>
                  <Link to={{ pathname: 'https://www.facebook.com'}} target='_blank'><FaFacebookSquare color='black'/></Link>
                </Social>                
                <Social>
                  <Link to={{ pathname: 'https://www.instagram.com'}} target='_blank'><FaInstagram color='black' /></Link>
                </Social>                
                <Social>
                  <Link to={{ pathname: 'https://www.twitter.com'}} target='_blank'><FaTwitter color='black' /></Link>
                </Social>                
                <Social>
                  <Link to={{ pathname: 'https://www.linkedin.com'}} target='_blank'><FaLinkedin color='black' /></Link>
                </Social>       
            </Row>
     
            
            </Iconcolor>
            <Row>
            {/* Column1 */}
            <Col>
            <H6>
              <h6>INFORMATION</h6>
              </H6>
              <IL>
              <ul className="list-unstyled">
                <Link to='/about'><li>About</li></Link>
                <Link to=''><li>Customer Service</li></Link>
                <Link to=''><li>Reward Program</li></Link>
                <Link to=''><li>Shipping & Returns</li></Link>
                <Link to=''><li>Privacy Policy</li></Link>
                <Link to=''><li>Terms & Conditions</li></Link>  
              </ul>
              </IL>
              </Col>
              {/* Column2 */}
              <Col>
              <H6>
              <h6>CUSTOMER SERVICE</h6>
              </H6>
              <IL>
              <ui className="list-unstyled">
                <Link to=''><li>Search Terms</li></Link>
                <Link to=''><li>Advanced Search</li></Link>
                <Link to=''><li>Orders and Returns</li></Link>
                <Link to=''><li>Contact Us</li></Link>
                <Link to=''><li>Theme FAQs</li></Link>
                <Link to=''><li>Consultant</li></Link>
              </ui>
              </IL>
              </Col>
              {/* Column3 */}
              <Col>
              <H6>
              <h6>SHOP</h6>
              </H6>
              <IL>
              <ui className="list-unstyled">
                <Link to=''><li>New In</li></Link>
                <Link to=''><li>Women</li></Link>
                <Link to=''><li>Men</li></Link>
                <Link to=''><li>Shoes</li></Link>
                <Link to=''><li>Bags & Accessories</li></Link>
                <Link to=''><li>Top Brands</li></Link>
                <Link to=''><li>Sale & Special Offers</li></Link>
                <Link to=''><li>Lookbook</li></Link>
              </ui>
              </IL>
              </Col>
              <Col>
              <br />
              <br />
              <H6>
              <h6>SIGN UP FOR OUR NEWSLETTER</h6>
              </H6>
              <Form.Group>
                <Form.Control placeholder="Email" name="email" type="email" ></Form.Control>
                <Button variant="secondary" type="submit">SUBMIT</Button>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <p className="col-sm">
              &copy;{new Date().getFullYear()} MANTIS COMPUTER | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </Row>
        </Container>
        </Mainfooter>
      </footer>
      
    );
}

export default Footer;