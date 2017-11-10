import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './Timeline';

it('renders without crashing when no events', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timeline />, div);
});

it('renders without crashing when no events', () => {
  const div = document.createElement('div');
  const events = [{ start: 5, end: 70, title: 'Study of Bendamustine' }]
  ReactDOM.render(<Timeline events={events}/>, div);

  //Assertions here.
});
