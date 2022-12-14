const NotesList = ({ notes, setNotes }) => {
  const notesElements = notes.map((note) => (
    <div
      key={note.id}
      data-id={note.id}
      className="mb-2 last:mb-0 p-3 dark:bg-gray-800 rounded-md border-2 dark:border-gray-700"
    >
      <p>{note.text}</p>
    </div>
  ));

  return (
    <div className="pb-4 md:w-2/3 md:columns-2 xl:columns-3 md:gap-2">
      {notes.length !== 0 && notesElements}
    </div>
  );
};

export default NotesList;
