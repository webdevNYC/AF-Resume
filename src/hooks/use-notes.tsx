import useSWR from "swr";
import { getAllNotes } from '../components/note-app/util'

const notesEndpoint = "http://localhost:3000/api/notes";
export function useNotes() { 
    const { data, error } = useSWR(notesEndpoint, getAllNotes, { refreshInterval: 1000 })
    return {
      notes: data,
      isLoading: !error && !data,
      isError: error
    }
  }