import Note from './Note';

const NotesList = ({ notes, setNotes }) => {
  const notesElements = notes.map((note) => <Note note={note} />);

  return (
    <div className="pb-4 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2">
      {notes.length !== 0 && notesElements}
    </div>
  );
};

export default NotesList;
