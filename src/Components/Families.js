import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestFamilies } from "../thunks/familiesThunk";
import { Table } from "react-bootstrap";

export default function Families() {
  const families = useSelector((state) => state.familiesReducer.families);
  const dispatch = useDispatch();

  useEffect(() => {
dispatch(requestFamilies())
  
  }, [])
  return (
    <div>
      <h3 className="text-center">Families </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {families.map((item) => (
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
