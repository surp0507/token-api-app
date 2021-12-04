import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../thunks/loginThunk";
import { setLogin } from "../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
export default function Login() {
  const login = useSelector((state) => state.loginReducer.login);
  const token = useSelector((state) => state.loginReducer.token);
  console.log(token);
  const { email, password } = login;
  console.log(login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    dispatch(setLogin({ ...login, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    localStorage.setItem("auth", token);
  }, []);

  const checkValidation = () => {
    dispatch(requestLogin(login));
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="col-sm-4 mx-auto my-5 align-item-center">
          <div className="box border  p-2 ">
            <h3 className="text-center text-primary my-5">Login </h3>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleInput}
              className="form-control text-center my-5"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleInput}
              className="form-control text-center my-3"
            />
            <Button
              onClick={checkValidation}
              className=" btn btn-primary my-2 mx-auto"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
