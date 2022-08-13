import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../Context/auth-context';

const Navigation = (props) => {

  const authCtx = useContext(AuthContext);


  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Home</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">About</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
       
      };

export default Navigation;
