import React from 'react';
import UserList from './user-list';
import UserListHook from './user-list-hook';

const App = () => {
    return (
        <div>
            <div>
                <UserList />
            </div>

            <div>
                <UserListHook />
            </div>
        </div>
    );
};

export default App;