import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import style from './Calendar.module.css';
import 'moment/locale/ru';
import { useSelector } from 'react-redux';
import { Event } from '../Event';

const months = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];
const years = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];

export const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(moment().locale('ru').year());
  const [currentMonth, setCurrentMonth] = useState(moment().locale('ru').month());
  const [days, setDays] = useState([]);
  const { events } = useSelector((state) => state.event);
  const [currentEvent, setCurrentEvent] = useState({});
  const [isOpenEvent, setOpenEvent] = useState(false);

  useEffect(() => {
    const countDays = moment(`${currentYear}-${currentMonth + 1}`, 'YYYY-MM').daysInMonth();
    setDays([
      ...new Array(countDays).fill(`${currentYear}-${currentMonth < 9 ? '0' + (currentMonth + 1) : currentMonth + 1}`),
    ]);
  }, [currentYear, currentMonth]);

  const openEvent = (event) => {
    if (!event) return;
    setCurrentEvent(event);
    setOpenEvent(true);
  }

  return (
    <div className={style.calendar}>
      <div className={style.header}>
        <Dropdown style={{ width: 'fit-content' }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {currentYear}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {years.map((year, index) => (
              <Dropdown.Item key={index} active={+year === currentYear} onClick={() => setCurrentYear(+year)}>
                {year}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{ width: 'fit-content' }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {months[currentMonth]}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {months.map((month, index) => (
              <Dropdown.Item key={index} active={index === currentMonth} onClick={() => setCurrentMonth(index)}>
                {months[index]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={style.wrapper}>
        {days.map((day, index) => {
          const currentDay = day + '-' + (index < 9 ? 0 + `${index + 1}` : index + 1);
          const currentEvent = events.find((ev) => ev.date === currentDay);

          return (
            <div onClick={() => openEvent(currentEvent)} key={index} className={style.cell}>
              <div className={style.cellContent}>
                {currentEvent && <span className={style.cellContent}>{currentEvent.name}</span>}
                <span className={style.cellContent}>{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Event show={isOpenEvent} event={currentEvent} close={setOpenEvent} />
    </div>
  );
};
