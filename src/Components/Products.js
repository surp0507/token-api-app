import React, { useEffect } from "react";
import { requestProducts } from "../thunks/productsThunk";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { setLimit } from "../redux/actions";
export default function Products() {
  const products = useSelector((state) => state.productsReducer.products);
  const limit = useSelector((state) => state.productsReducer.limit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, [limit]);

  const handleChangeFilter = (event) => {
    dispatch(setLimit(event.target.value));
  };
  return (
    <div>
      <h2>products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <select value={limit} onClick={handleChangeFilter}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}
