import React, { lazy, Suspense, useState } from 'react';

const AddUser = lazy(() => import('./components/Users/AddUser'));
const UsersList = lazy(() => import('./components/Users/UsersList'));

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <Suspense fallback={<h1>Lodding...</h1>}>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={userList} />
      </Suspense>
    </>
  );
}

export default App;
