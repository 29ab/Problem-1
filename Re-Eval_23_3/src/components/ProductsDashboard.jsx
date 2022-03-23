import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData, sortProducts } from "../Redux/actions";

export const Products = () => {
  // to get all products list on component mounts
  
  let {data, isLoading, isError} = useSelector((state) =>(
    data = state.data,
    isLoading = state.isLoading,
    isError = state.isError
  ))
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    dispatch(sortProducts(e.taregt.value))

  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((e, index) => {
            return <div key={index}>
              <p>{e.title}</p>
              <img src={e.image} alt="picture"/>
              <p>{e.price}</p>
            </div>;
          })}
      </div>
    </>
  );
};
