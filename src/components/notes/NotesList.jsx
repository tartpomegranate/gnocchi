const NotesList = ({ notes, setNotes }) => {
  const notesElements = notes.map((note) => (
    <div
      key={note.id}
      data-id={note.id}
      className="last:mb-0 p-3 dark:bg-gray-800 rounded-md border-2 dark:border-gray-700"
    >
      <p>
        {note.text.length > 200 ? `${note.text.slice(0, 200)}...` : note.text}
      </p>
    </div>
  ));

  return (
    <div className="pb-4 md:w-2/3 grid grid-cols-2 md:gap-2">
      {notes.length !== 0 && notesElements}
    </div>
  );
};

export default NotesList;
