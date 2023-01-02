import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

export const Login = () => {
  const { isLoading, error } = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useActions();

  const submit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: window.innerHeight - 64 }}>
        {error && <h1 style={{ color: 'red', textAlign: 'center' }}>{error}</h1>}
        <Form onSubmit={submit} style={{ maxWidth: 500 }}>
          <Form.Control
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: 15 }}
            type="text"
            placeholder="Имя"
          />
          <Form.Control
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: 15 }}
            type="text"
            placeholder="Пароль"
          />
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
