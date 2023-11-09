import React, { useState } from 'react';
import Header from './components/Header';
import Cta from './components/cta'; // Corrected the import name to match the component
import Notes from './components/notes';
import './styles.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
  }

  return (
    <div className="App">
      <Header />
      <Cta onAdd={addNote} /> {/* Corrected the component name to uppercase "Cta" */}
      {notes.map((note, index) => (
        <Notes
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
}

export default App;
