import moment from 'moment';
import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const EventForm = ({ guests, submit, closeModal }) => {
  const [event, setEvent] = useState({
    author: '',
    name: '',
    description: '',
    guest: '',
    date: ''
  });
  const {user} = useSelector(state => state.auth);
  const datePicker = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    submit({...event, author: user.username});
  }

  const setName = (name) => {
    setEvent({...event, name});
  }
  
  const setDescription = (description) => {
    setEvent({...event, description});
  }

  const setDate = (date) => {
    const curretnDate = moment().format('YYYY-MM-DD');
    const isBefore = moment(curretnDate).isBefore(date, 'YYYY-MM-DD');
    const isSame = moment(curretnDate).isSame(date, 'YYYY-MM-DD');
    if (isBefore || isSame) {
      setEvent({...event, date});
    } else {
      alert('Нельзя добавить событие на предыдущую дату!');
      datePicker.current.value = '';
    }
  }

  return (
    <>
      <Modal.Body>
        <Form onSubmit={submitForm}>
          <Form.Control onChange={(e) => setName(e.target.value)} required style={{ marginBottom: 20 }} type="text" placeholder="Введите название" />
          <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" style={{ marginBottom: 20 }} placeholder="Описание" rows={3} />
          <Form.Control
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ marginBottom: 20 }}
            type="date"
            ref={datePicker}
          />
          <Form.Select onChange={(e) => setEvent({ ...event, guest: e.target.value })}>
            <option>Выбор гостя</option>
            {guests.map((guest, index) => (
              <option key={index} value={guest.username}>
                {guest.username}
              </option>
            ))}
          </Form.Select>
          <Button type="submit" variant="primary" style={{ width: '100%', marginTop: 15 }}>
            Добавить
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(false)}>Закрыть</Button>
      </Modal.Footer>
    </>
  );
};
