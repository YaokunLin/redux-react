import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UsersContainer from './components/UsersContainer'

function App() {
  return (
    <div className="App">
      <CakeContainer />
      with hooks:
      <HooksCakeContainer />
      <NewCakeContainer />
      <HooksIceCreamContainer />
      <UsersContainer />
    </div>
  );
}

export default App;
