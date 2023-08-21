import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
interface UserData {
  user_id: string;
  password: string;
}

const EditUser: React.FC = () => {
  const [newUser, setNewUser] = useState<UserData>({
    user_id: '',
    password: ''
  });
  //const [authToken, setAuthToken] = useState('');

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleCreateUser = () => {
    const apiUrl = 'http://localhost:8080/users/alice';
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGljZSJ9.4E-8lcUi0JvcTV1AOAoPjBmuFokGR2aR6gKtufMp5qU'; // Replace with your actual authentication token

    axios
      .post(apiUrl, newUser, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
         message.success('User edited successfully');
        // Clear the form fields after successful creation
        setNewUser({
          user_id: '',
          password: ''
        });
      })
      .catch(error => {
       message.error('Opps!');
      });
  };

  return (
    <div>
      <h2>Edit User data POST /users/user_id</h2>
      <div>
        <input
          type="text"
          name="user_id"
          placeholder="User ID"
          value={newUser.user_id}
          onChange={handleUserChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleUserChange}
        />
      </div>
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default EditUser;
