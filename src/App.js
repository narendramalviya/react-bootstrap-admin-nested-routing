import './App.css';
import Layout from './component/Layout/Layout';
import {

  Route,
 Redirect
} from "react-router-dom";
import Login from './pages/Login/Login';
import auth from './services/auth';
import { useEffect, useState } from 'react';
function App() {
  const [isAuthenticated, setAuthenticate] = useState(false);
  useEffect(() => {
    const isAuth = auth.getAuth();

    if (isAuth) {
      setAuthenticate(true);
    } else {
      setAuthenticate(false);
    }
  })
  return (
    <div className="App" style={{height: '100%'}}>
      <h1>App Main</h1>
      {/* <Route path='/' exact={true} component={Login}/> */}

      <Route path='/' exact={true} >
        {isAuthenticated ? <Redirect to="/admin" /> : <Login />}
      </Route>
      <Route path='/admin' component={Layout} />
    </div>
  );
}

export default App;
