import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JC from "img/PhotoRoom-20220812_002116.png"
const ModalU =({Show,handleClose})=> {

  return (
    <>
     

      <Modal show={Show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Algo para agregar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={JC} style={{width: '60%'}} alt="..."/>
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
export default ModalU;
