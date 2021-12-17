// endpoint it would be on env file
const notesEndpoint = "http://localhost:3000/api/notes";

//export const fetcher = (...args) => fetch(...args).then(res => res.json())
export async function getAllNotes() {
  const response = await fetch(notesEndpoint);
  const data = await response.json();
  const notes: any = [];

  for (const key in data) {
    notes.push({
      ...data[key]
    });
  }
  return notes;
}

export const updateNote = async (note: any) => {
  const response = await fetch(`${notesEndpoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(note),
  });
  return await response.json();
};
export async function getNoteByTitle(slug: string) {
  const allNotes = await getAllNotes();
  return allNotes.find((note: any) => note.slug === slug);
}
export async function getNotesPaths() {
  const allNotes = await getAllNotes();
  return allNotes.map((item: any) => ({
    params: { slug: item['slug'] },
  }));
}
