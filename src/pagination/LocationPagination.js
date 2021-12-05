import React from "react";
import { useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../redux/actions";

export const LocationPagination = () => {
  const location = useSelector((state) => state.locationReducer.location);
  const currentPage = useSelector((state) => state.locationReducer.currentPage);
  const perPage = useSelector((state) => state.locationReducer.perPage);
  const dispatch = useDispatch();

  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(location.length / perPage); i++) {
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
