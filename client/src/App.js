import './App.css';
import RulesDisplay from './components/RulesDisplay';

import GameBox from './containers/GameBox';
import UserSelection from './containers/UserSelection';

function App() {
  return (
    <div className="App">
      <GameBox/>
      <RulesDisplay/>
      <UserSelection/>
    </div>
  );
}

export default App;
