import { useState, useEffect } from 'react';
import { fetchUsers } from './fetchUsers';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListHook {
  users: User[];
  loading: boolean;
  error: Error | null;
}

const useUserList = (): UserListHook => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        if (Array.isArray(response)) {
          setUsers(response);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { users, loading, error };
};

export default useUserList;
