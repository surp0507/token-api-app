import React, { useEffect } from "react";
import { requestProducts } from "../thunks/productsThunk";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { setLocationPerPage } from "../redux/actions";
import { ProductsPagination } from "../pagination/ProductsPagination";
export default function Products() {
  const products = useSelector((state) => state.productsReducer.products);
  const currentPage = useSelector((state) => state.productsReducer.currentPage);
  const perPage = useSelector((state) => state.productsReducer.perPage);
  const dispatch = useDispatch();

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentproducts = products.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    dispatch(requestProducts());
  }, []);

  const handleChange = (e) => {
    const item = e.target.value;
    dispatch(setLocationPerPage(item));
  };

  return (
    <div>
      <h2 className="my-3">products</h2>
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
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {currentproducts.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <ProductsPagination />
    </div>
  );
}
