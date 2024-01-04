import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPool from "../../data/cognito/data";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = new CognitoUser({
    Username: email,
    Pool: UserPool
  })

  const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password
  })

  const onSubmit = (event) => {
    event.preventDefault();

    user.authenticateUser(authDetails, {
      onSuccess: (data) => navigate("/"),
      onFailure: (err) => window.alert(err.message),
    })

  }

  return (

    <div className="signInCom flex items-center h-dvh">

      <div className="signInCard border w-96 ms-36 p-5 rounded-md">

        <form onSubmit={onSubmit}>

          <div className="emailSection">

            <label htmlFor="emailInput" className="block mb-3">Email</label>

            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              type="text" 
              id="emailInput" 
              className="w-72 bg-gray-200 border-none outline-none mb-3 rounded-md p-2"
            />

          </div>

          <div className="passwordSection">

            <label htmlFor="passwordInput" className="block mb-3">
              Password</label>

            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
              type="password" 
              id="passwordInput" 
              className="w-72 bg-gray-200 border-none outline-none mb-6 rounded-md p-2"
            />

          </div>

          <input type="submit" value="Sign in" className="bg-green-600 w-60 py-2 rounded-md text-white" />

        </form>

      </div>

    </div>

  );
}

export default SignIn;
