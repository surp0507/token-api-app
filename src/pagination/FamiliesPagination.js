import React from "react";
import { setCurrentPage, setPageNumber } from "../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const FamiliesPagination = () => {
  const families = useSelector((state) => state.familiesReducer.families);
  const perPage = useSelector((state) => state.familiesReducer.perPage);
  const dispatch = useDispatch();

  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(families.length / perPage); i++) {
    pagenumber.push(i);
  }

  const handleClick = (number) => {
    dispatch(setCurrentPage(number));
  };
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {pagenumber.map((number) => (
          <li key={number} className="page-item">
            <p
              className="page-link bg-primary text-white "
              onClick={() => handleClick(number)}
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};
