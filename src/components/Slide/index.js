import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carroceu } from './styles';
 
import foto1  from '../../assets/foto1.jpg'
import foto2  from '../../assets/foto2.jpg'
import foto3  from '../../assets/foto3.jpg'

function slide() {
    return(
        <Carroceu>
        <Carousel fade>
            <Carousel.Item>

                <img
                className="d-block w-100 "
                src={foto1}
                alt="First slide"
                />
                
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={foto2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={foto3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Carroceu>
    );
}

export default slide;