import { useSelector, useDispatch } from "react-redux";
import { setRegistration } from "../redux/actions";
import {requestRegistor} from '../thunks/registerThunk'

export default function Registration() {
  const register = useSelector((state) => state.registerReducer.registration);

  const dispatch = useDispatch();

  const checkValidation = () => {
    dispatch(requestRegistor());
  };

  return (
    <div>
      <div>
        <h3 className="text-center text-success my-5">Registration </h3>
        <div className="col-sm-4 mx-auto my-3">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => dispatch(setRegistration(e.target.value))}
            className="form-control text-center my-2"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => dispatch(setRegistration(e.target.value))}
            className="form-control text-center my-2"
          />
          <button
            onClick={checkValidation}
            className="mx-auto btn btn-success my-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
