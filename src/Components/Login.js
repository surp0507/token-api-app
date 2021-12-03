import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const checkValidation = () => {
    const { email, password } = this.state;
    if (!email === "" && !password === "") {
    } else {
      setError("email and password must be filled ");
    }
  };
  return (
    <div>
      <div>
        <h3 className="text-center text-primary my-5">Login </h3>
        <div className="col-sm-4 mx-auto my-3">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control text-center my-2"
          />
          <span className="text-danger">{error}</span>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control text-center my-2"
          />
          <span className="text-danger">{error}</span> <br />
          <button
            onClick={checkValidation}
            className="mx-auto btn btn-primary my-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
