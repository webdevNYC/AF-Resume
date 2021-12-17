import useSWR from "swr";
import NoteList from "../../../components/note-app/NoteList";
import { getAllNotes } from "../../../components/note-app/util";

const NoteAppPage = () => {
  const notesEndpoint = "http://localhost:3000/api/notes";
  const { data: notes } = useSWR(notesEndpoint, getAllNotes);

  if (!notes) {
    return <div>Loading</div>;
  }

  return <NoteList notes={notes} />;
};

export default NoteAppPage;
