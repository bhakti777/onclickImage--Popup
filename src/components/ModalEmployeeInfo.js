import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalEmployeeInfo = ({ imageInfo, showModal, handleClose }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}> //here show is a property 
        <Modal.Header closeButton>
          <strong>Employee Details: </strong>
        </Modal.Header>

        <Modal.Body>
          <p> employee Id :{imageInfo.id} </p>
          <p> employee firstname:{imageInfo.first_name}</p>
          <p> employee lastname:{imageInfo.last_name}</p>
          <p> employee email:{imageInfo.email}</p>
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
