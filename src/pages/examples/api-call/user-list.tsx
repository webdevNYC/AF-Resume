import React, { useState, useEffect, ReactElement } from 'react';
import { fetchUsers } from './fetchUsers';

type UserType ={
    id:number,
    name: string,
    email: string
}
const UserList = ():ReactElement<UserType> => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
        try {
          const response = await fetchUsers();
          if (Array.isArray(response)) {
            setUsers(response);
          }
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;