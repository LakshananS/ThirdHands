import React, { useState } from 'react'; // Import useState from react
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform validation of username and password
    // For demonstration purposes, let's just log them
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add logic here to send the credentials to a server for authentication
  };

  return (
    <div className='rect'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" required style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
          <input type="submit" value="Login" style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px' }} />
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup; // Fix export name to match function name
