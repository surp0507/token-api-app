import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestLocation } from "../thunks/locationThunk";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
export default function Location() {
  const location = useSelector((state) => state.locationReducer.location);
  console.log(location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestLocation());
  }, []);
  return (
    <div>
      <h3 className="text-center">Location </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {location.map((item) => (
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
