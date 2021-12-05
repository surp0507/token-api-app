import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestLocation } from "../thunks/locationThunk";
import { setLocationPerPage } from "../redux/actions";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { LocationPagination } from "../pagination/LocationPagination";
export default function Location() {
  const location = useSelector((state) => state.locationReducer.location);
  const currentPage = useSelector((state) => state.locationReducer.currentPage);
  const perPage = useSelector((state) => state.locationReducer.perPage);
  const dispatch = useDispatch();

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentItems = location.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    dispatch(requestLocation());
  }, []);

  const handleChange = (e) => {
    const item = e.target.value;
    dispatch(setLocationPerPage(item));
  };

  return (
    <div>
      <h3 className="text-center">Location </h3>
      filter:-
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
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
 <LocationPagination />
    </div>
  );
}
