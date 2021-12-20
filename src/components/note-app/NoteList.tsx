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
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notesOrderBy?.map((note: NoteItemType, idx) => (
        <NoteItem {...note} key={idx} />
      ))}
    </ul>
  );
};

export default NoteList;
