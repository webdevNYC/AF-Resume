import React, { useState } from "react";
import Link from "next/link";
import useSWR, { useSWRConfig } from "swr";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateNote, updateNote2 } from "../../components/note-app/util";

interface IFormInputs {
  title: string;
  message: string;
  className: boolean;
  lastModified: string;
}

const schema = yup
  .object({
    title: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

function NoteEdit(props: any) {
  const { mutate } = useSWRConfig();
  const { title, message, className, slug } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      title: title,
      message: message,
    },
  });

  const [formSubmited, setFormSubmited] = useState(false);

  async function onSubmit(data: { title: string; message: string }) {
    const reqBody = {
      slug: slug,
      title: data.title,
      message: data.message,
      className: className,
    };

    await updateNote(reqBody);
    mutate(reqBody);
    setFormSubmited(true);
  }

  return (
    <div className="w-full max-w-lg text-gray-700 ">
      {formSubmited ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          Note Updated!
        </div>
      ) : null}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <h1 className="block text-xl font-bold mb-2">Note Taking- Edit</h1>
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            {...register("title")}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="title"
          />
          <p>{errors.title?.message}</p>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Message Note</label>
          <textarea
            {...register("message")}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          />
          <p>{errors.message?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-42 flex items-center justify-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            type="submit"
          >
            Save Edit
          </button>
          <Link href="/challenges/note-app">
            <a className="w-42 flex items-center justify-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
              Show Note List
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default NoteEdit;
