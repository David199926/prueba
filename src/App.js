import './App.css';
// My Components
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';
import Posts from './Components/Posts/Posts';
// React router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
// React redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Firebase
//import { FirebaseAppProvider } from 'reactfire';
//import { config as firebaseConfig } from './firebase/firebase-config';

function App() {
  return (

      <Provider store={store}>
        <Router>
          <Switch>
            {/* Langing page */}
            <ProtectedRoute logged={false} exact path="/" component={Landing} />
            {/* Login page */}
            <ProtectedRoute logged={false} path="/login" component={Login} />
            {/* Signin page */}
            <ProtectedRoute logged={false} path="/signin" component={Signin} />
            {/* Posts page */}
            <ProtectedRoute logged={true} path="/posts" component={Posts} />
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
