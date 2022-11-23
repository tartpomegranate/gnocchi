import TextTruncate from 'react-text-truncate';

const NotesList = ({ notes, setNotes }) => {
  const notesElements = notes.map((note) => (
    <div
      key={note.id}
      data-id={note.id}
      className="dark:bg-gray-800 p-3 rounded-md border-2 dark:border-gray-700"
    >
      <TextTruncate
        line={3}
        element="p"
        truncateText="…"
        text={note.text}
        className="whitespace-pre-wrap"
      />
    </div>
  ));

  return (
    <div className="my-4 flex flex-col gap-4">
      {notes.length !== 0 && (
        <div className="flex flex-col gap-2">{notesElements}</div>
      )}
    </div>
  );
};

export default NotesList;
