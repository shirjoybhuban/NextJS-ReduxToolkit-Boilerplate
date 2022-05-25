import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/slices/usersSlice';
import { wrapper } from '../store/store';
import { increment } from '../store/slices/counterSlice';
import Link from 'next/link';

const ReduxServersideprop = () => {
  const [name, setName] = useState('');
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addNewUser = () => {
    dispatch(addUser(name));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div>
        <label>New User:</label>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={addNewUser}>Add</button>
        <h4>User List:</h4>
        <ol>
          {users.map((user) => (
            <li>{user}</li>
          ))}
        </ol>
      </div>
      {/* <AddCount /> */}
      <Link href="/">
        <a>go to Home</a>
      </Link>
      <br />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const response = await fetch(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    const { data } = await response.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
    //store.dispatch(increment());
  }
);

export default ReduxServersideprop;
