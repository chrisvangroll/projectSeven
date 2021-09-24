import './styles/App.css';
import './styles/auth.css';
import './styles/nav.css';
import './styles/editBtn.css';
import Login from './components/auth/login.jsx';
import Forum from './components/posts/forum.jsx';
import Account from'./components/nav/account.jsx';
import Signup from  './components/auth/signUp.jsx';
import MakePost from './components/nav/makePost.jsx';
import Modify from './components/posts/modify'
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
        <Route path="/modify">
          <Modify/>
        </Route>
      </Switch>
     </div>
     
    </Router>
  );
}

export default App;
