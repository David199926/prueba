import './App.css';
// My Components
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Posts from './Components/Posts/Posts';
// Reaqct router dom
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        {/* Langing page */}
        <Route exact path="/" component={Landing} />
        {/* Login page */}
        <Route exact path="/login" component={Login} />
        {/* Posts page */}
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
}

export default App;
