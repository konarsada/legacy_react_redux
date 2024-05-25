import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeConatiner from './components/NewCakeConatiner';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />

        <HooksCakeContainer />

        <CakeContainer />
        <IceCreamContainer />

        <NewCakeConatiner />

        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
