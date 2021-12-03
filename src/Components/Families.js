import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";

export default function Families() {
  const families = useSelector((state) => state.familiesReducer.families);
  const dispatch = useDispatch();
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
          {families.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
