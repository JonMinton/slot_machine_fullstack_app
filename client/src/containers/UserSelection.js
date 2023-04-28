import React, {useEffect, useState} from 'react';

import './UserSelection.css'

import UserExistingSelect from '../components/UserExistingSelect';
import UserNewForm from '../components/UserNewForm';

const seedUsers = [
    {
        _id: Math.random(),
        name: "Alice",
        balance: 0.00
    },
    {
        _id: Math.random(),
        name: "Bob",
        balance: 0.00
    },
    {
        _id: Math.random(),
        name: "Charlie",
        balance: 0.00
    }

]

const UserSelection = ({handleActiveUserSelected, activeUser}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(seedUsers)
        
    }, [])

    const handleUserSelect = (id) => {
        console.log(`handleUserSelect called with id ${id}`)
        if (id === ""){
            handleActiveUserSelected(null)
        } else {
            const activeUser = users.filter(user => user._id === id)
            handleActiveUserSelected(activeUser)    
        }
    }

    const handleUserAdd = (newUser) => {
        console.log("handleUserAdd called")
        console.log(newUser)
        let tempUsers = users
        tempUsers.push(newUser)
        console.log(tempUsers)
        setUsers(tempUsers)
        // setUsers(...users, ...newUser)
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