import React, {useState} from 'react';
import {ButtonMet} from '../pages/CheckOut/styles';
import {Modal, Button} from 'react-bootstrap';
import { RiBankLine } from "react-icons/ri";


function Pix() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <ButtonMet onClick={handleShow}><RiBankLine size='2rem' color='#deaa0c' />Pix</ButtonMet>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Pagamento via Pix</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p><strong>CNPJ:</strong> 01.101.000/0001-00</p>
              <p><strong>Razão Social: </strong>Store Carolina's ecommerce</p>
              <p><strong>Enviar comprovante</strong></p>
                <input type='file' />
               
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  export default Pix;

