// UserList.js
import React, { useEffect, useState } from 'react';
import UserUpdate from "./userdata/userdataupdate";
import UserForm from "./userdata/userdataform";
import { Alert } from 'bootstrap';

const UserList = () => {
    const [showUserUpdate, setShowUserUpdate] = useState(false);
    const [showUserForm, setShowUserForm] = useState(false);
    useEffect =() =>{
        setShowUserUpdate(true);
    }
    const handleShowUserUpdate = () => {
        console.log(showUserUpdate)
        setShowUserUpdate(true);
        setShowUserForm(false); // Hide UserForm when showing UserUpdate
        console.log(showUserUpdate,"after")
    };

    const handleShowUserForm = () => {
        setShowUserForm(true);
        setShowUserUpdate(false); // Hide UserUpdate when showing UserForm
    };

    return (
        <div>
             
            <h2>User List</h2>
            <button onClick={handleShowUserUpdate}>Show User Update</button>
            <button onClick={handleShowUserForm}>Show User Form</button>

            {/* Conditionally render UserUpdate and UserForm */}
            {showUserUpdate && <UserUpdate />}
            {showUserForm && <UserForm />}
        </div>
    );
};

export default UserList;
