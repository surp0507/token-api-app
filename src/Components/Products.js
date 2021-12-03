import React, { useEffect } from "react";
import { requestProducts } from "../thunks/productsThunk";
import { useSelector, useDispatch } from "react-redux";
import {Table,Button} from 'react-bootstrap'

export default function Products() {
  const products=useSelector(state=>state.productsReducer.products)
  console.log(typeof(products))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  },[]);

  return (
    <div>
      <h2>products</h2>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {products.map(item=>(
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
