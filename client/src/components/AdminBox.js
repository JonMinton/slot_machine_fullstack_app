import React, { useEffect, useState } from 'react';
import './AdminBox.css'

const AdminBox = ({users, handleUserNameChange, handleBarUser}) => {

    const [selectedUser, setSelectedUser] = useState('')
    const [selectedUserName, setSelectedUserName] = useState('')


    useEffect( () => {
        if(selectedUser) {
        setSelectedUserName(selectedUser.name)
        }
    }, [selectedUser])

    const handleOnChange = (e) => {
        console.log(`value passed to handleOnChange is ${e.target.value}`)
        setSelectedUser(
            users.find((user) => {
                return e.target.value === user._id
            })
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handeSubmit triggered")

        const newName = selectedUserName
        let temp = selectedUser
        temp.name = newName
        setSelectedUser(temp)
        handleUserNameChange(temp)

    }

    const handleNameOnChange = (e) => {
        if(selectedUser) {
        console.log(`value passed to handleNameOnChange is ${e.target.value}`)
        const newSelectedUserName = e.target.value
        setSelectedUserName(newSelectedUserName)
        }
    }

    const renderUserOptions = users.map((u) => {
        return <option key={u._id} value={u._id}>{u.name}</option>
    })


    const handleDeleteClick = () => {
        if(selectedUser) {
            handleBarUser(selectedUser)
            console.log(`Handle onclick clicked with id ${selectedUser._id}`)
        }
    }

    const changeForm = () => {
        return (
        <form onSubmit = {handleSubmit}>
            <input onChange={handleNameOnChange} type="text" value={selectedUserName}/>
            <button onClick={handleDeleteClick}>Bar User</button>
            <button>Submit changes</button>
        </form>
        )
    }
    return (
    <div className="AdminBox">
        <h2>AdminBox</h2>
        <select onChange = {handleOnChange}> 
            <option value="">Select customer</option>
                {renderUserOptions}
        </select>
        {selectedUser && changeForm()}
    </div>  );
}
 
export default AdminBox;