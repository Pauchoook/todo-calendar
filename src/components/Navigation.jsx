import React from 'react';
import { Container, Navbar, Nav, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../router';
import { useActions } from '../hooks/useActions';

export const Navigation = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav style={{ width: '100%' }} className="justify-content-end">
          {isAuth ? (
            <>
              <h2 style={{color: 'white', marginRight: 10}}>{user.username}</h2>
              <Button onClick={logout}>Выйти</Button>
            </>
          ) : (
            <Link to={routes.LOGIN}>
              <Button>Логин</Button>
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
