import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
//import { auth } from "./firebase";
//import { auth } from "./firebase";

function Login() {
  //useNavigate () es un hook de React Router que nos permite redireccionar al usuario a distintas páginas.
  const history = useNavigate();
  //El hook useState() nos permite almacenar el valor de los inputs del usuario en el estado y actualizarlo a medida que el usuario escribe.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  /*
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // se crea un nuevo usuario con contraseña

        if (auth) {
          history.push("/");
          // history.push("/checkout");
        } else {
          history.push("/checkout");
        }
        console.log(auth);
      })

      .catch((error) => alert(error.message));
  };
*/
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </NavLink>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>Al iniciar sesion, acepta que le robemos su info.</p>

        <button /*onClick={register}*/ className="login__registerButton">
          Crear Cuenta
        </button>
      </div>
    </div>
  );
}

export default Login;
