import { useEffect } from "react";
import { GetStaticPaths } from "next";
import NoteEdit from "../../../components/note-app/NoteEdit";
import {
  getNoteByTitle,
  getNotesPaths,
} from "../../../components/note-app/util";
import { NoteItemType } from "../../../components/note-app/types";
function NoteDetailPage(props: NoteItemType) {
  return <NoteEdit {...props} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const pathArray: [] = await getNotesPaths();

  return {
    fallback: false,
    paths: pathArray,
  };
};
export async function getStaticProps(context: any) {
  // fetch data for a single Note
  const slug = context.params.slug;
  const noteItem: NoteItemType = await getNoteByTitle(slug);

  const { title, message, lastModified, className } = noteItem;
  return {
    props: {
      slug: slug,
      title: title,
      message: message,
      lastModified,
      className,
    },
    revalidate: 1,
  };
}
export default NoteDetailPage;
