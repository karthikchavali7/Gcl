
import React, { useState } from 'react';

function Cta({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handle(e) {
    const { name, value } = e.target;
    setNote(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function fg(event) { // Pass the event as an argument
    event.preventDefault(); // Prevent the default form submission behavior
    onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form onSubmit={fg}> {/* Use onSubmit instead of onClick */}
        <input value={note.title} type="text" placeholder="TITLE" className="title-input" name="title" onChange={handle} />
        <p><textarea name="content" placeholder="take a note" value={note.content} rows={5} onChange={handle}></textarea></p>
        <button type="submit">Add</button> {/* Change the button type to "submit" */}
      </form>
    </div>
  );
}

export default Cta;
