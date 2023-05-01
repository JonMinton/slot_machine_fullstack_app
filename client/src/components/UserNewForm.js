import React, { useState } from 'react'

const UserNewForm = ({ handleUserAdd, newUser, handleNewUser }) => {

    const [userName, setUserName] = useState('')
    const [userBalance, setUserBalance] = useState(0.0)

    if (!newUser) return

    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleUserBalanceChange = (e) => {
        setUserBalance(Number(e.target.value))
    }


    const handleNewUserSubmit = (e) => {
        e.preventDefault()
        console.log("button pressed")

        handleUserAdd(
            {
                name: userName,
                balance: Number(userBalance)
            }
        )
        setUserName('')
        setUserBalance('')
        handleNewUser(false)
    }


    return (
        <div className="UserNewForm">
            <form onSubmit={handleNewUserSubmit}>
                <label htmlFor="newUserName">Name:</label>
                <input
                    type="text"
                    id='newUserName'
                    name='newUserName'
                    onChange={handleNameChange}
                    value={userName}
                />
                <label htmlFor="newUserBalance">Initial Balance:</label>
                <input
                    type="number"
                    step="0.01"
                    id="newUserBalance"
                    name="newUserBalance"
                    min="0.00"
                    value={userBalance}
                    onChange={handleUserBalanceChange}
                />
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    );
}

export default UserNewForm;