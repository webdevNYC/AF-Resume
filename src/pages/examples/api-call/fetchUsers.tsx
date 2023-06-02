

const userList = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ];
  
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userList);
      }, 1000); // Simulate a 1-second delay
    });
  };
