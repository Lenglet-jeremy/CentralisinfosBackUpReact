import React, { useState, useEffect, useRef } from 'react';
import './NoteWidget.css';

const NoteWidget = () => {
  const [noteContent, setNoteContent] = useState("");
  const textAreaRef = useRef(null);

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Réinitialiser la hauteur pour recalculer
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Ajuster la hauteur en fonction du contenu
    }
  }, [noteContent]); // Déclencher l'effet chaque fois que le contenu change

  return (
    <div className="NoteWidget">
      <textarea
        ref={textAreaRef}
        value={noteContent}
        onChange={handleNoteChange}
        className="NoteTextArea"
        placeholder="Écrivez vos notes ici..."
      />
    </div>
  );
};

export default NoteWidget;
