import React from 'react';
import './App.css';
import ParticipantList from './components/ParticipantList/ParticipantList';
import { participants } from './participants';

function App() {
  return (
    <div className="App">
      <ParticipantList participants={participants} />
    </div>
  );
}

export default App;
