// import './App.css';

// function Users() {
//     return (
//       <div className="App">
//         <h1 className="App-logo">hello user</h1>
//         <button className="App" >hello user</button>
//       </div>
//     );
//   }
  
//   export default Users;

// Users.js
// Users.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserList from './components/users/userlist';
import UserProfile from './components/users/userprofile';

const Users = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h2>Users Page</h2>
            <button onClick={() => handleNavigate('userlist')} className="App">userlist</button>
            <button onClick={() => handleNavigate('profile')} className="App">userprofile</button>
            {/* Define nested routes */}
            <Routes>
                <Route path="userlist" element={<UserList />} />
                <Route path="profile" element={<UserProfile />} />
            </Routes>
        </div>
    );
};

export default Users;

