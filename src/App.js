import React from 'react';
import './App.css';
import ParticipantList from './components/ParticipantList/ParticipantList';
import { participants } from './participants';
import Stage from './components/Stage/Stage';

function App() {
  return (
    <div className="App">
      <ParticipantList participants={participants} />
      <Stage participants={participants}/>
    </div>
  );
}

export default App;

