import React, {useState} from 'react';

import './App.css';
import RulesDisplay from './components/RulesDisplay';

import GameBox from './containers/GameBox';
import UserSelection from './containers/UserSelection';

function App() {

  const [activeUser, setActiveUser] = useState("")

  const handleActiveUserSelected = (selectedUser) => {
    setActiveUser(selectedUser)
  }

  return (
    <div className="App">
      <UserSelection handleActiveUserSelected={handleActiveUserSelected} activeUser={activeUser}/>
      {activeUser && <GameBox/>}
      {activeUser && <RulesDisplay/>}
    </div>
  );
}

export default App;
