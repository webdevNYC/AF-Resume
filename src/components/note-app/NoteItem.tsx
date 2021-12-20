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
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="w-full flex items-center justify-between p-6 space-x-6">
      <div>
      <div className='text-xl'>{title}</div>
      <div>{message}</div>
      <div>Updated: {dateFormatted.toDateString()}</div>
      </div>
      <Link href={linkPath}>
        <a className="w-16 flex items-center justify-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Edit
        </a>
      </Link>
    </div>
    </li>
  );
};
export default NoteItem;
