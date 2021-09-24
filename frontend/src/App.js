import './styles/App.css';
import './styles/auth.css';
import './styles/nav.css';
import Login from './components/auth/login';
import Forum from './components/posts/forum';
import Account from'./components/nav/account';
import Signup from  './components/auth/signUp';
import MakePost from './components/nav/makePost';
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
        <Route path="/create">
          <MakePost/>
        </Route>
        <Route path="/account">
          <Account/>
        </Route>
      </Switch>
     </div>
     
    </Router>
  );
}

export default App;
