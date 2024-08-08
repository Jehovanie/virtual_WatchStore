import { createSlice } from "@reduxjs/toolkit";
import { WatchModel } from "@/_shared/models";
import { client } from "@/_config/api/client";
import { createAppAsyncThunk } from "@/_config/app//withTypes";
import { FetchStatus } from "@/_config/app/utils/EnumStatus";
import watches from "@/_shared/faker/product";
import { useAppSelector } from "../hooks/hooks";

import { RootState } from "../store";

export const fetchProduct = createAppAsyncThunk("product/all", async () => {
	const response = await client.get<WatchModel[]>("/products");
	return response.data;
});

export interface ProductState {
	products: WatchModel[];
	status: FetchStatus;
	error: String | null;
}

const initialState: ProductState = {
	products: watches,
	status: "idle",
	error: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
});

export default productSlice.reducer;

export const getAllWatchs = (state: RootState) => state.product.products;
export const getWatchStatus = (state: RootState) => state.product.status;
export const getWatchError = (state: RootState) => state.product.error;

export const selectWatchById = (state: RootState, watchID: Number) =>
	state.product.products.find((watch: WatchModel) => watch.id === watchID);