import React, {useEffect, useState} from 'react';

import './UserSelection.css'

import UserExistingSelect from '../components/UserExistingSelect';
import UserNewForm from '../components/UserNewForm';



const UserSelection = ({users, handleActiveUserSelected, handleAddNewUser, activeUser}) => {



    const handleUserSelect = (id) => {
        console.log(`handleUserSelect called with id ${id}`)
        if (id === ""){
            handleActiveUserSelected(null)
        } else {
            const activeUser = users.filter((user) => 
            {return(user._id === Number(id))})[0]
            console.log(activeUser)
            handleActiveUserSelected(activeUser)    
        }
    }

    const handleUserAdd = (newUser) => {
        console.log("handleUserAdd called")
        console.log(newUser)
        handleAddNewUser(newUser)
        handleActiveUserSelected(newUser)
    }

    return (
        <div className = "UserSelection">
            <h2>UserSelection</h2>
            <p>There are {users.length} users</p>
            <UserExistingSelect 
                users = {users} 
                handleUserSelect={handleUserSelect} 
                activeUser={activeUser}    
            />
            <UserNewForm handleUserAdd={handleUserAdd}/>
        </div>
      );
}
 
export default UserSelection;