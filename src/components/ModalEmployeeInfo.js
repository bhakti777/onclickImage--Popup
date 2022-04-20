import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalEmployeeInfo = ({ empInfo, showModal, handleClose }) => {
  return (
    <>
      <Modal showModal={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <strong>Employee Details: </strong>
        </Modal.Header>

        <Modal.Body>
          <p> employee Id :{empInfo.id} </p>
          <p> employee firstname:{empInfo.first_name}</p>
          <p> employee lastname:{empInfo.last_name}</p>
          <p> employee email:{empInfo.email}</p>
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
