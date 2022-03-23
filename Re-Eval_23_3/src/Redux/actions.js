import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_FILTER, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
    type:PRODUCT_REQ,

});

// action for get products success

export const getProductsSuccess = (playload) => ({
    type:PRODUCT_SUCCESS,
    playload
});

// action for get products failure

export const getProductsFailure = (message) => ({
    type:PRODUCT_FAILURE,
    playload:message,
});

// thunk call to fetch products  list
export const getproductsData = () => (dispatch) => {
//    dispatch(getProductsReq()),
   axios.get("https://movie-fake-server.herokuapp.com/products")
   .then((res) => res.dispatch(getProductsSuccess(res.data.data)))
   .catch((err) => dispatch(getProductsFailure(err)))
};

// action object for sort  feature

export const sortProducts = (payload) => ({
    type:PRODUCT_FILTER,
    payload
});
