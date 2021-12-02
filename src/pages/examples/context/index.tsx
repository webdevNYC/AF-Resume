
import React, { useContext, createContext, useEffect, useState, useMemo } from 'react';
import UserInfo from './UserInfo'
interface UserContextInterface {
  userName: string,
  setUserName?: Function,
}
export const UserContext = createContext<UserContextInterface>({
  userName: '',
  setUserName: () => { }
});

const ContextPage = () => {
  const [userName, setUserName] = useState('John Smith');

  const value = useMemo(
    () => ({ userName, setUserName }),
    [userName]
  );
  useEffect(() => {
    setTimeout(() => {
      setUserName('Smith, John Smith');
    }, 2000);
  }, []);
  return (
    <UserContext.Provider value={value}>
      <div className='p-5'>
        <h1 className='text-xl pt-2'>EXERCISE: useContext - useMemo - Typescript</h1>
        <p>Resouce: <a href='https://dmitripavlutin.com/react-context-and-usecontext/'>dmitripavlutin.com/react-context-and-usecontext</a>
        </p>
        <h2 className='text-lg pt-2'>User Input</h2>
        <UserNameInput />
        <UserInfo />
      </div>

    </UserContext.Provider>

  );
  function UserNameInput() {
    const { userName, setUserName } = useContext(UserContext);
    const changeHandler = (event: any) => {
      const currentValue = event ? event.target.value : 'default'
      setUserName ? setUserName(currentValue) : null;
    }
    return (
      <input
        type="text"
        value={userName}
        onChange={changeHandler}
      />
    );
  }
};

export default ContextPage;
