import { useSelector, useDispatch } from "react-redux";
import { requestRegistor } from "../thunks/registerThunk";
import { setRegistration } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.registerReducer.registration);

  const { email, password } = register;
  const navigate = useNavigate();

  const handleInput = (e) => {
    dispatch(setRegistration({ ...register, [e.target.name]: e.target.value }));
  };

  const checkValidation = (e) => {
    e.preventDefault();
    dispatch(requestRegistor(register));
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div className="col-sm-4 mx-auto my-4">
          <div className="box border p-2">
            <h3 className="text-center text-success my-5">Registration </h3>
            <div className="input my-3">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleInput}
                className="form-control text-center"
              />
            </div>
            <div className="input my-3">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={handleInput}
                className="form-control text-center"
              />
            </div>
            <button
              onClick={checkValidation}
              className="mx-auto btn btn-success my-2"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
