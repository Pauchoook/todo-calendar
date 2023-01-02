import React, { useEffect } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { Navigation } from './components/Navigation';
import { useActions } from './hooks/useActions';

function App() {
  const {setUser, setAuth} = useActions();

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setUser({username: localStorage.getItem('username')});
      setAuth(true);
    }
  }, []);

  return (
    <>
      <Navigation />
      <AppRouter />
    </>
  );
}

export default App;
