import { SWRConfig } from "swr";
import NoteList from "../../../components/note-app/NoteList";
import { getAllNotes } from "../../../components/note-app/util";
import { useNotes } from "../../../hooks/use-notes";

const Notes = () => {
  const { notes, isLoading, isError } = useNotes();
  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;
  return <NoteList notes={notes} />;
};

const NoteAppPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Notes />
    </SWRConfig>
  );
};

export async function getStaticProps() {
  const notes = await getAllNotes();
  return {
    props: {
      fallback: {
        "/api/notes": notes,
      },
    },
  };
}
export default NoteAppPage;
