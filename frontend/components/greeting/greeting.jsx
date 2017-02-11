import React from 'react';

const loggedOutGreet = () => (
  <div>
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const loggedInGreet = (currentUser, logout) => (
  <div>
    <h2>Welcome, { currentUser.username }</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? loggedInGreet(currentUser, logout) : loggedOutGreet()
);

export default Greeting;
