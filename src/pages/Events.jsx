import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Calendar } from '../components/Calendar';
import { EventForm } from '../components/EventForm';
import { useActions } from '../hooks/useActions';

export const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests } = useSelector((state) => state.event);
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event) => {
    createEvent(event);
    setShowModal(false);
  }

  return (
    <Container style={{ minHeight: window.innerHeight - 54, paddingBottom: 30 }}>
      <Calendar />
      <Row style={{ marginTop: 20 }} className="justify-content-center">
        <Button onClick={() => setShowModal(true)}>Добавить событие</Button>
      </Row>
      <Modal show={showModal}>
        <EventForm closeModal={setShowModal} submit={addNewEvent} guests={guests} />
      </Modal>
    </Container>
  );
};
