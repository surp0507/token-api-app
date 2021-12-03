import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Protected(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);
  let Cmp = props.cmp;
  return (
    <div>
      <Cmp />
    </div>
  );
}
