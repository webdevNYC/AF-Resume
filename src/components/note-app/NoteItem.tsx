import { FC } from "react";
import Link from "next/link";
import { NoteItemType } from './types';

const NoteItem: FC<NoteItemType> = ({
  slug,
  title,
  message,
  className,
  lastModified,
}) => {
  const dateFormatted = new Date(lastModified);
  const linkPath = `/challenges/note-app/${slug}`;

  return (
    <div className={"m-4 py-4 px-4 rounded-md shadow"}>
      <div className={className}>{title}</div>
      <div>{message}</div>
      <div>Last Modified: {dateFormatted.toDateString()}</div>
      <Link href={linkPath}>
        <a className="w-16 flex items-center justify-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Edit
        </a>
      </Link>
    </div>
  );
};
export default NoteItem;
