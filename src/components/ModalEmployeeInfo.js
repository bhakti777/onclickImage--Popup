import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalEmployeeInfo = ({ imageInfo, showModal, handleClose }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}> 
        <Modal.Header closeButton>
          <strong>Employee Details: </strong>
        </Modal.Header>

        <Modal.Body>
          <p> employee Id : <strong>{imageInfo.id}</strong> </p>
          <p> employee firstname: <strong>{imageInfo.first_name}</strong></p>
          <p> employee lastname:<strong> {imageInfo.last_name}</strong></p>
          <p> employee email: <strong>{imageInfo.email}</strong></p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEmployeeInfo;
