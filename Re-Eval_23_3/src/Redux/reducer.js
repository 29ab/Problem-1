import { PRODUCT_FAILURE, PRODUCT_FILTER, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, action)=>{
    // add the switch statement for different actions

    switch(action.type){
        case PRODUCT_REQ:
            return{
                ...state,
                isLoading:true,
            }

        case PRODUCT_SUCCESS:
            return{
                ...state,
                products:[...state.data,action.payload]
            }

        case PRODUCT_FAILURE:
            return{
                ...state,
                isError:true,
            }

        case PRODUCT_FILTER:
            const newproduct = state.data.filter((a,b) => a.price - b.price )
            return{
                ...state,
                products:newproduct,
            }
    }

}