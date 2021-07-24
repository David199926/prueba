import './App.css';
// My Components
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Posts from './Components/Posts/Posts';
// React router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// React redux
import { Provider } from 'react-redux';
// store
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
