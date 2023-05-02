import React, { useState, useEffect } from 'react';

import './App.css';
import RulesDisplay from './components/RulesDisplay';

import GameBox from './containers/GameBox';
import UserSelection from './containers/UserSelection';
import ImageHolder from './components/ImageHolder';
import { getUsers, postUser, putUser } from './UserService';


function App() {

    const [activeUser, setActiveUser] = useState(null)

    const [users, setUsers] = useState([])
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCardAPI()
    }, [])

    useEffect(() => {
      getUsers().then(data => {
        setUsers(data)
      })
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
                const roundedAmount = Math.round(amt * 100) / 100
                const roundedBalance = Math.round(usr.balance * 100) / 100
                 // update db balance
                putUser(activeUser._id, {
                    balance: roundedBalance + roundedAmount
                })
                // update client-side
                usr.balance = roundedBalance + roundedAmount
                
           
            
            }
            return usr
        })
        setUsers(tempUsers)
    }

    const handleAddNewUser = (newUser) => {
        console.log("handleAddNewUser called")
        postUser(newUser)
        .then(res => {
            handleActiveUserSelected(res)

            let tempUsers = users
            tempUsers.push(res)
            setUsers(tempUsers)
        })
        
    }

    return (
        <div className="App">
            <UserSelection users={users} handleActiveUserSelected={handleActiveUserSelected} handleAddNewUser={handleAddNewUser} activeUser={activeUser} />
            {activeUser && <GameBox balance={activeUser.balance} updateBalance={updateBalance} cards={cards} />}
            {activeUser && <RulesDisplay />}
            {cards && <ImageHolder cards={cards}/>}
        </div>
    );
}

export default App;
