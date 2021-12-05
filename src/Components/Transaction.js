import React from "react";
import { Table } from "react-bootstrap";
import { reqestTransaction } from "../thunks/transactionThunk";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TransactionPagination from "../pagination/TransactionPagination";
import { setLocationPerPage } from "../redux/actions";

export default function Transaction() {
  useEffect(() => {
    dispatch(reqestTransaction());
  }, []);

  const transaction = useSelector(
    (state) => state.transactionReducer.transaction
  );
  const perPage = useSelector((state) => state.transactionReducer.perPage);
  const currentPage = useSelector(
    (state) => state.transactionReducer.currentPage
  );
  const dispatch = useDispatch();

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentproducts = transaction.slice(indexOfFirstPage, indexOfLastPage);

  const handleChange = (e) => {
    const item = e.target.value;
    dispatch(setLocationPerPage(item));
  };

  return (
    <div>
      <h3 className="text-center">Transaction </h3>
      Filter:-{" "}
      <select
        value={perPage}
        onChange={(e) => handleChange(e)}
        className="col-sm-1 my-3"
      >
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>cost</th>
            <th>quantity</th>
            <th>productId</th>
          </tr>
        </thead>
        <tbody>
          {currentproducts.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.productId}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <TransactionPagination />
    </div>
  );
}
