import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import React from "react";

const TransactionPagination = () => {
  const transaction = useSelector(
    (state) => state.transactionReducer.transaction
  );
  const perPage = useSelector((state) => state.transactionReducer.perPage);
  const dispatch = useDispatch();

  const pageNumber = [];
  for (let i = 1; i < Math.ceil(transaction.length / perPage); i++) {
    pageNumber.push(i);
  }

  const handleClick = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {pageNumber.map((number) => (
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

export default TransactionPagination;
