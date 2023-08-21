import React, { useState } from 'react';
import axios from 'axios';

interface AuthResponse {
  access: string;
}

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');

  const handleLogin = () => {
    const apiUrl = 'http://localhost:8080/token';

    axios
      .post<AuthResponse>(apiUrl, {
        user_id: username,
        password: password
      })
      .then(response => {
        const token = response.data.access;
        setAuthToken(token);
        console.log('Authentication successful. Token:', token);
      })
      .catch(error => {
        console.error('Authentication failed:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {authToken && (
        <div>
          <p>Authentication Token:</p>
          <p>{authToken}</p>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
