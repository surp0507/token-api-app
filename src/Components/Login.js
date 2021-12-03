import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../thunks/loginThunk";
import { setLogin } from "../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const login = useSelector((state) => state.loginReducer.login);
  console.log(login);
  const token = login.data.access_token;
  localStorage.setItem("auth", JSON.stringify(token));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkValidation = () => {
    dispatch(requestLogin());

    navigate("/");
  };
  return (
    <div>
      <div>
        <h3 className="text-center text-primary my-5">Login </h3>
        <div className="col-sm-4 mx-auto my-3">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => dispatch(setLogin(e.target.value))}
            className="form-control text-center my-2"
          />

          <input
            type="password"
            placeholder="password"
            onChange={(e) => dispatch(setLogin(e.target.value))}
            className="form-control text-center my-2"
          />

          <button
            onClick={() => checkValidation}
            className="mx-auto btn btn-primary my-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
