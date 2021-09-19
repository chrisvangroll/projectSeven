import logo from './logo.svg';
import './App.css';
import Login from './login';
import Forum from './forum';
import Account from'./account';
import Signup from  './signUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      {/* available for all routes */}
     </div>
     <div className="content">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/forum">
          <Forum/>
        </Route>
      </Switch>
     </div>
     
    </Router>
  );
}

export default App;
