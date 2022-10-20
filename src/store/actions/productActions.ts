import axios from "../../axios";
import { AppDispatch } from "../index";
import { productSlice } from "../slices/productSlice";
import { IProduct, ServerResponse } from "../../models/models";

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching)
            const response = await axios.get<ServerResponse<IProduct>>('result')
            dispatch(productSlice.actions.fetchsuccess(
                response.data.products
            ))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))
        }
    }
}