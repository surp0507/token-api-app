import React, { useEffect } from "react";
import { requestProducts } from "../thunks/productsThunk";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  });

  return (
    <div>
      <h2>products</h2>
    </div>
  );
}
