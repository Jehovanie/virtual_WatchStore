import { createSlice } from "@reduxjs/toolkit";

import { WatchModel } from "@/_shared/models";
import { FetchStatus } from "@/_config/app/utils/EnumStatus";
// import watches from "@/_shared/faker/product";

import { RootState } from "../store";
import { fetchWatchs } from "./AsyncThunk/fetchWatchs";
import { IDLE, PENDING, REJECTED, SUCCEEDED } from "../utils/constant";

export interface ProductState {
	products: WatchModel[];
	status: FetchStatus;
	error: String | null;
}

const initialState: ProductState = {
	products: [],
	status: IDLE,
	error: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWatchs.pending, (state, action) => {
				state.status = PENDING;
			})
			.addCase(fetchWatchs.fulfilled, (state, action) => {
				state.status = SUCCEEDED;
				// Save the fetched posts into state
				state.products = action.payload;
			})
			.addCase(fetchWatchs.rejected, (state, action) => {
				state.status = REJECTED;
				state.error = action.error.message ?? "Unknown Error";
			});
	},
});

export default productSlice.reducer;

export const getAllWatchs = (state: RootState) => state.product.products;
export const getWatchStatus = (state: RootState) => state.product.status;
export const getWatchError = (state: RootState) => state.product.error;

export const selectWatchById = (state: RootState, watchID: Number) =>
	state.product.products.find((watch: WatchModel) => watch.id === watchID);
