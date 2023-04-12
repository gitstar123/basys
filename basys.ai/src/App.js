import './App.css';
import PriorAuthorization from './Components/Screens/PriorAuthorization/PriorAuthorization';
import Claims from './Components/Screens/Claims/Claims';
import MyProfile from './Components/Screens/MyProfile/MyProfile'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App d-flex" style={{backgroundColor : '#d7def2'}}>
        <Routes>
          <Route path = '/' element = {<PriorAuthorization/>}></Route>
          <Route path = '/claims' element = {<Claims/>}></Route>
          <Route path = '/myProfile' element = {<MyProfile/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
