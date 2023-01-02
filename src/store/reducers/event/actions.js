import UserService from '../../../api/UserService';
import { SET_EVENTS, SET_GUESTS } from './types';

export const eventActions = {
  setGuests: (guests) => ({ type: SET_GUESTS, payload: guests }),
  setEvents: (events) => ({ type: SET_EVENTS, payload: events }),
  fetchGuests: () => async (dispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(eventActions.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event) => async (dispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events).filter(ev => ev.date !== event.date);
      json.push(event);
      dispatch(eventActions.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username) => async (dispatch) => {
    const events = localStorage.getItem('events') || '[]';
    const json = JSON.parse(events);
    const currentEvents = json.filter((ev) => ev.author === username || ev.guest === username);
    dispatch(eventActions.setEvents(currentEvents));
  },
};
