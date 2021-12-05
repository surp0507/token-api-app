import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestFamilies } from "../thunks/familiesThunk";
import { setLocationPerPage } from "../redux/actions";
import { FamiliesPagination } from "../pagination/FamiliesPagination";
import { Table } from "react-bootstrap";

export default function Families() {
  const families = useSelector((state) => state.familiesReducer.families);
  const perPage = useSelector((state) => state.familiesReducer.perPage);
  const currentPage = useSelector((state) => state.familiesReducer.currentPage);
  const dispatch = useDispatch();

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentFamilies = families.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    dispatch(requestFamilies());
  }, []);

  const handleChange = (e) => {
    const item = e.target.value;
    dispatch(setLocationPerPage(item));
  };

  return (
    <div>
      <h3 className="text-center">Families </h3>
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
          {currentFamilies.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <FamiliesPagination />
    </div>
  );
}
