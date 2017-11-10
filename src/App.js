import React, { Component } from 'react';
import './markdown.css';
import {Timeline, renderCliniqualTrials} from './Timeline.js'
import ReactMarkdown from 'react-markdown';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ReactMarkdown source={
          `
# Frise d'études thérapeutiques

### Exemple donné en énoncé

\`\`\`jsx
<Timeline events={[
  { start: 5, end: 50, title: 'Study of Bendamustine' },
  { start: 55, end: 85, title: 'ASCT With Nivolumab' },
  { start: 70, end: 100, title: 'Study of Stockolm' },
  { start: 90, end: 115, title: 'Bortezomib' },
]} />
\`\`\`
or 
\`\`\`jsx
{renderCliniqualTrials([
  { start: 5, end: 50, title: 'Study of Bendamustine' },
  { start: 55, end: 85, title: 'ASCT With Nivolumab' },
  { start: 70, end: 100, title: 'Study of Stockolm' },
  { start: 90, end: 115, title: 'Bortezomib' },
])}
\`\`\`

`
        } />
        {renderCliniqualTrials([
          { start: 5, end: 50, title: 'Study of Bendamustine' },
          { start: 55, end: 85, title: 'ASCT With Nivolumab' },
          { start: 70, end: 100, title: 'Study of Stockolm' },
          { start: 90, end: 115, title: 'Bortezomib' },
        ])}
        <ReactMarkdown source={
          `
### Années entre 2000 et 2005
\`\`\`jsx
<Timeline events={[
  { start: -12, end: 0, title: '1999' },
  { start: 0, end: 12, title: '2000' },
  { start: 12, end: 24, title: '2001' },
  { start: 24, end: 36, title: '2002' },
  { start: 36, end: 48, title: '2003' },
  { start: 48, end: 60, title: '2004' },
  { start: 60, end: 72, title: '2005' },
]} />
\`\`\`
`
        } />

        <Timeline events={[
          { start: -12, end: 0, title: '1999' },
          { start: 0, end: 12, title: '2000' },
          { start: 12, end: 24, title: '2001' },
          { start: 24, end: 36, title: '2002' },
          { start: 36, end: 48, title: '2003' },
          { start: 48, end: 60, title: '2004' },
          { start: 60, end: 72, title: '2005' },
        ]} />

        <ReactMarkdown source={
          `
  ### Exemple plus complexe
  \`\`\`jsx
  <Timeline events={[
    { start: 5, end: 70, title: 'Study 1' },
    { start: 2, end: 20, title: 'Study 2' },
    { start: 25, end: 50, title: 'Study 3' },
    { start: 55, end: 85, title: 'Study 4' },
    { start: 75, end: 100, title: 'Study 5' },
    { start: 102, end: 123, title: 'Study 6' },
    { start: 101, end: 126, title: 'Study 7' },
    { start: 103, end: 145, title: 'Study 8' },
    { start: -16, end: 0, title: 'Study 9' },
  ]} />
  \`\`\`
  `
        } />

        <Timeline events={[
          { start: 5, end: 70, title: 'Study 1' },
          { start: 2, end: 20, title: 'Study 2' },
          { start: 25, end: 50, title: 'Study 3' },
          { start: 55, end: 85, title: 'Study 4' },
          { start: 75, end: 100, title: 'Study 5' },
          { start: 102, end: 123, title: 'Study 6' },
          { start: 101, end: 126, title: 'Study 7' },
          { start: 103, end: 145, title: 'Study 8' },
          { start: -16, end: 0, title: 'Study 9' },
        ]} />

        <ReactMarkdown source={
          `
# Limites
### Dimension verticale
\`\`\`jsx
<Timeline events={[
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
]} />
\`\`\`
`
        } />

        <Timeline events={[
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
        ]} />

        <ReactMarkdown source={
          `
> On pourrait trouver une alternative pour mieux gérer l'overflow.
> Comme par exemple afficher un tooltip au passage de la souris.
\`\`\`jsx
<Timeline events={[
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
  { start: 0, end: 70, title: 'Study' },
]} />
\`\`\`
`
        } />

        <Timeline events={[
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
          { start: 0, end: 70, title: 'Study' },
        ]} />


        <ReactMarkdown source={
          `
> Deux événements très éloignés dans le temps pourraient aussi être problématiques.
          `
        } />

        <Timeline events={[
          { start: 0, end: 1, title: 'Study 1' },
          { start: 102, end: 103, title: 'Study 1' },
        ]} />



      </div>
    );
  }
}

export default App;