import { useSelector, useDispatch } from "react-redux";
import { requestRegistor } from "../thunks/registerThunk";
import { setRegistration } from "../redux/actions";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { setEmailError } from "../redux/actions";
import { setPassError } from "../redux/actions";

export default function Registration() {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.registerReducer.registration);
  const emailError = useSelector((state) => state.loginReducer.emailError);
  const passError = useSelector((state) => state.loginReducer.passError);
  const { email, password } = register;
  const navigate = useNavigate();

  const handleInput = (e) => {
    dispatch(setRegistration({ ...register, [e.target.name]: e.target.value }));
  };

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

  const handleRegister = () => {
    dispatch(setEmailError(""));
    dispatch(setPassError(""));

    if (checkValid()) {
      alert("you have registered sucessfully");
      dispatch(requestRegistor(register));
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <div className="col-sm-4 mx-auto my-4">
          <div className="box border p-2">
            <h3 className="text-center text-info my-5">Registration </h3>
            <div className="input my-5">
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
            <div className="input my-5">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={handleInput}
                className="form-control text-center"
              />
              <span className="text-danger">{passError}</span>
            </div>
            <div className="my-2">
              <Button
                onClick={handleRegister}
                className="mx-auto btn btn-info text-white my-2"
              >
                Register
              </Button>
            </div>
            <span>already have an account?</span>{" "}
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
