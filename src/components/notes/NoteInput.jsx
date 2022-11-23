import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NoteInput = ({ setNotes }) => {
  const [newNote, setNewNote] = useState('');

  const handleNewNote = () => {
    const noteObject = {
      id: uuidv4(),
      text: newNote
    };

    setNotes((notes) => [...notes, noteObject]);
    setNewNote('');
  };

  return (
    <div className="flex flex-col gap-4 rounded-md">
      <textarea
        placeholder="Enter a Note..."
        className="block w-full resize-none p-2 h-36 rounded-md shadow-md hover:shadow-lg outline-none bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition duration-200 focus:border-gray-400 dark:focus:border-gray-600 focus:shadow-lg"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      ></textarea>

      <button
        className="py-2 px-4 rounded-md font-semibold text-white bg-sky-500 hover:bg-sky-600 dark:border-gray-800 dark:hover:border-gray-700 transition duration-200"
        onClick={handleNewNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteInput;
