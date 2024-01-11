const NotesList = ({ note }) => {
  return (
    <div
      key={note.id}
      data-id={note.id}
      className="last:mb-0 p-3 dark:bg-gray-800 rounded-md border-2 dark:border-gray-700"
    >
      <p>
        {note.text.length > 200 ? `${note.text.slice(0, 200)}...` : note.text}
      </p>
    </div>
  );
};

export default NotesList;
