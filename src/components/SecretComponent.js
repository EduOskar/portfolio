import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

//easter egg nr 2

export const SecretComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const myKey = "oskar";

  let keyInput = "";

  document.addEventListener("keydown", (key) => {
    keyInput += key.key;
    if (myKey === keyInput) {
      setShow(true);
    } else {
      setTimeout(() => {
        keyInput = "";
      }, 3000);
    }
  });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello im Mr.egg, first of his name!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          i suggest you should hire me only due to my sense of humor!
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
