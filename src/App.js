import React, { Component } from 'react';
import Timeline from './Timeline.js'

const events1 = [
  { start: 5, end: 70, title: 'Study of Bendamustine' },
  { start: 2, end: 20, title: 'ASCT With Nivolumab' },
  { start: 25, end: 50, title: 'ASCT With Nivolumab' },
  { start: 55, end: 85, title: 'ASCT With Nivolumab' },
  { start: 70, end: 100, title: 'Study of Stockolm' },
  // { start: 60, end: 90, title: 'Study of Stockolm' },
  // { start: 114, end: 115, title: 'Bortezomib' },
  // { start: 110, end: 115, title: 'Bortezomib2' },
  // { start: 120, end: 160, title: 'Bortezomib3' },
  { start: -12, end: 0, title: '1999' },
  // { start: 0, end: 12, title: '2000' },
  // { start: 12, end: 24, title: '2001' },
  // { start: 24, end: 36, title: '2002' },
  // { start: 36, end: 48, title: '2003' },
  // { start: 48, end: 60, title: '2004' },
  // { start: 60, end: 72, title: '2005' },
  // { start: 72, end: 84, title: '2006' },
  // { start: 84, end: 96, title: '2007' },
  // { start: 96, end: 108, title: '2008' },
  // { start: 108, end: 120, title: '2009' },
]

class App extends Component {

  render() {
    return (
      <div className="App">
        Là c'est l'exemple que vous m'avez donné.
        <Timeline events={[
          { start: 5, end: 50, title: 'Study of Bendamustine' },
          { start: 55, end: 85, title: 'ASCT With Nivolumab' },
          { start: 70, end: 100, title: 'Study of Stockolm' },
          { start: 90, end: 115, title: 'Bortezomib' },
        ]} />
        <Timeline events={events1} />
        Là c'est un cas qui marche pas trop bien.
        <Timeline events={[
          { start: -12, end: 0, title: '1999' },
          { start: 0, end: 12, title: '2000' },
          { start: 12, end: 24, title: '2001' },
          { start: 24, end: 36, title: '2002' },
          { start: 36, end: 48, title: '2003' },
          { start: 48, end: 60, title: '2004' },
          { start: 60, end: 72, title: '2005' },
          { start: 72, end: 84, title: '2006' },
          { start: 84, end: 96, title: '2007' },
          { start: 96, end: 108, title: '2008' },
          { start: 108, end: 120, title: '2009' },
        ]} />
      </div>
    );
  }
}

export default App;