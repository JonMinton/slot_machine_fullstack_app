import React, {useState, useEffect} from 'react';

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

  useEffect(() => {
      setUsers(seedUsers)
      
  }, [])

  const handleActiveUserSelected = (selectedUser) => {
    selectedUser ? console.log(`handleActiveUserSelected called with user ${selectedUser.name}`) : console.log("No active user selected")
    setActiveUser(selectedUser)
  }

  const updateActiveUserBalance = (amt) => {
    // console.log('updateActiveUserBalance called')
    console.log(activeUser)
    let currentActiveUser = activeUser
    // console.log(currentActiveUser.balance)
    currentActiveUser.balance += Number(amt)
    // console.log(currentActiveUser.balance)
    setActiveUser(currentActiveUser)
  }

  const handleAddNewUser = (newUser) => {
    console.log("handleAddNewUser called")
    let tempUsers = users
    tempUsers.push(newUser)
    setUsers(tempUsers)
  }

  return (
    <div className="App">
      <UserSelection users = {users} handleActiveUserSelected={handleActiveUserSelected} handleAddNewUser = {handleAddNewUser} activeUser={activeUser}/>
      {/* {activeUser && <GameBox users = {users} activeUser={activeUser} updateActiveUserBalance={updateActiveUserBalance}/>} */}
      {activeUser && <RulesDisplay/>}
    </div>
  );
}

export default App;
