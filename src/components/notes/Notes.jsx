import { useLocalStorage } from 'usehooks-ts';

import NotesInput from './NoteInput';
import NotesList from './NotesList';

const Notes = () => {
  const [notes, setNotes] = useLocalStorage('notes', []);

  return (
    <div className="mx-8 md:flex md:gap-4">
      <NotesInput setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default Notes;
