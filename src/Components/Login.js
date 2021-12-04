import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../thunks/loginThunk";
import { setLogin } from "../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import { setEmailError } from "../redux/actions";
import { setPassError } from "../redux/actions";
export default function Login() {
  const login = useSelector((state) => state.loginReducer.login);
  const token = useSelector((state) => state.loginReducer.token);
  const emailError = useSelector((state) => state.loginReducer.emailError);
  const passError = useSelector((state) => state.loginReducer.passError);
  const { email, password } = login;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    dispatch(setLogin({ ...login, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    localStorage.setItem("auth", token);
  }, []);

  const checkValid = () => {
    if (!email.includes("@") && password.length < 3) {
      dispatch(setEmailError("Missing  @"));
      dispatch(setPassError("password length sould be more than 3"));
    } else if (!email.includes("@")) {
      dispatch(setEmailError("Missing  @"));
    } else if (password.length < 3) {
      dispatch(setPassError("password length sould be more than 3"));
    } else {
      return true;
    }
  };

  const handleLogin = () => {
    if (checkValid()) {
      alert("you have logged in");
      dispatch(requestLogin(login));
      navigate("/");
    }
  };
  return (
    <div>
      <div>
        <div className="col-sm-4 mx-auto my-5 align-item-center">
          <div className="container border  p-2 ">
            <h3 className="text-center text-primary my-5">Login Form</h3>
            <div className=" my-5">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleInput}
                className="form-control text-center"
              />
              <span className="text-danger">{emailError}</span>
            </div>
            <div className="my-3">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleInput}
                className="form-control text-center "
              />
              <span className="text-danger">{passError}</span>
            </div>
            <div className="my-3">
              <Button
                onClick={handleLogin}
                className=" btn btn-primary my-2 mx-auto"
              >
                Login
              </Button>
            </div>
            <span>don't have an account?</span>
            <Link to="/registration"> Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
