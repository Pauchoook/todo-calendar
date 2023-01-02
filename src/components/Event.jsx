import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const Event = ({show, close, event}) => {
  console.log(event)

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{event.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{whiteSpace: 'pre'}}>{event.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => close(false)}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
