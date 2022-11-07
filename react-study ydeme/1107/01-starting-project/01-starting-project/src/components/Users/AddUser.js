import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: '이름과 나이가 입력되어있는지 확인해주세요',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: ' 나이가 유효한지 확인해주세요',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="username">Age(Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
