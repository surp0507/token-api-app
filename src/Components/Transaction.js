import React from "react";
import { Table } from "react-bootstrap";
import { reqestTransaction } from "../thunks/transactionThunk";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Transaction() {
  const transaction = useSelector((state) => state.transactionReducer.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reqestTransaction());
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
