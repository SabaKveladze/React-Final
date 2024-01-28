// import React from 'react';
// import './login.css'
// import {Link} from 'react-router-dom'
// const LoginPage = () => {
//   const handleLogin = () => {
//     // Handle login logic here
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <Link classname='loginLink' to='/Registration'>Register</Link></p>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import './login.css'; // Importing the login.css file

const LoginPage = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/registration">Register</a></p>
    </div>
  );
};

export default LoginPage;
