import React, { useState, useEffect } from 'react';

import './App.css';
import RulesDisplay from './components/RulesDisplay';

import GameBox from './containers/GameBox';
import UserSelection from './containers/UserSelection';


const seedUsers = [
    {
        _id: Math.floor(Math.random() * (10 ** 8)),
        name: "Alice",
        balance: 0.00
    },
    {
        _id: Math.floor(Math.random() * (10 ** 8)),
        name: "Bob",
        balance: 0.00
    },
    {
        _id: Math.floor(Math.random() * (10 ** 8)),
        name: "Charlie",
        balance: 0.00
    }

]

function App() {

    const [activeUser, setActiveUser] = useState(null)

    const [users, setUsers] = useState([])
    const [cards, setCards] = useState([])

    useEffect(() => {
        setUsers(seedUsers)
    }, [])

    useEffect(() => {
        getCardAPI()
    }, [])

    const getCardAPI = () => {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => data.cards)
        // .then(res => console.log(res))
        .then(data => {
            return data.filter((c) => {
                return c.value === "ACE"
            })
        })
        .then(data => setCards(data))




        // .then(data => setCards(data))
        
    

      }


    useEffect(() => {
        console.log("Change to active user state detected")
    }, [activeUser])

    useEffect(() => {
        console.log("Change to users state detected")
    }, [])

    const handleActiveUserSelected = (selectedUser) => {
        selectedUser ?
            console.log(`handleActiveUserSelected called with user ${selectedUser.name}`) :
            console.log("No active user selected")
        setActiveUser(selectedUser)
    }

    const updateBalance = (amt) => {
        console.log(`updateBalance called for amount ${amt}`)
        const tempUsers = users.map(usr => {
            if (usr._id === activeUser._id) {
                usr.balance += amt
            }
            return usr
        })
        setUsers(tempUsers)
    }

    const handleAddNewUser = (newUser) => {
        console.log("handleAddNewUser called")
        let tempUsers = users
        tempUsers.push(newUser)
        setUsers(tempUsers)
    }

    return (
        <div className="App">
            <UserSelection users={users} handleActiveUserSelected={handleActiveUserSelected} handleAddNewUser={handleAddNewUser} activeUser={activeUser} />
            {activeUser && <GameBox balance={activeUser.balance} updateBalance={updateBalance} />}
            {activeUser && <RulesDisplay />}
        </div>
    );
}

export default App;
