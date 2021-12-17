import { FC } from "react";
import { NoteItemType } from "./types";
import NoteItem from "./NoteItem";

type Props = {
  notes: NoteItemType[];
};

const NoteList: FC<Props> = ({ notes }) => {
  const notesOrderBy = notes.sort(function (x: any, y: any) {
    let a = new Date(x.lastModified),
      b = new Date(y.lastModified);
    return b - a;
  });

  return (
    <ul>
      {notesOrderBy?.map((note: NoteItemType, idx) => (
        <NoteItem {...note} key={idx} />
      ))}
    </ul>
  );
};

export default NoteList;
