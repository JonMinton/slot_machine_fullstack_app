import React, { useState, useEffect } from 'react';

import './App.css';
import RulesDisplay from './components/RulesDisplay';

import GameBox from './containers/GameBox';
import AdminBox from './components/AdminBox';
import UserSelection from './containers/UserSelection';
import { getUsers, postUser, putUser, deleteUser } from './UserService';


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

    const handleUserNameChange = (usr) => {
      const userId = usr._id
      const payload = {
        name: usr.name
      }
      putUser(userId , payload)

      let tempUsers = users.map((user) => {
        if (user._id === userId) {
          user.name = usr.name
        }
        return user
      })
      setUsers(tempUsers)
    }
    
    const handleBarUser = (usr) => {
      const userId = usr._id
      console.log('User ID is', userId)
      deleteUser(userId)

      let tempUsers = users.filter((user) => {
        return (user._id !== userId)
      })
      setUsers(tempUsers)
    }

    return (
        <div className="App">
            <UserSelection users={users} handleActiveUserSelected={handleActiveUserSelected} handleAddNewUser={handleAddNewUser} activeUser={activeUser} />
            {activeUser && <GameBox balance={activeUser.balance} updateBalance={updateBalance} cards={cards} />}
            {activeUser && <RulesDisplay />}
            {users && <AdminBox users={users} handleUserNameChange={handleUserNameChange} handleBarUser={handleBarUser}/>}
        </div>
    );
}

export default App;
