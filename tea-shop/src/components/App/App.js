import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import { Routes ,Route } from 'react-router-dom';
import {Main} from "../Main/Main";
function App() {

  return (
      <>
          <AppHeader/>
          <Routes>
              <Route path="/"   element={<Main/>} exact={true}/>
          </Routes>
      </>


  );
}

export default App;
