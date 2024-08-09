import { createSlice } from "@reduxjs/toolkit";
import { WatchModel } from "@/_shared/models";
import { client } from "@/_config/api/client";
import { createAppAsyncThunk } from "@/_config/app//withTypes";
import { FetchStatus } from "@/_config/app/utils/EnumStatus";
// import watches from "@/_shared/faker/product";

import { RootState } from "../store";

export interface ProductState {
	products: WatchModel[];
	status: FetchStatus;
	error: String | null;
}

export const fetchWatchs = createAppAsyncThunk(
	"watch/fetchAll",
	async () => {
		const response = await client.get<any>("/api/watchs");
		return response.data;
	},
	{
		condition(arg, thunkApi) {
			const watchStatus = getWatchStatus(thunkApi.getState());
			if (watchStatus !== "idle") {
				console.log(arg);
				return false;
			}
		},
	}
);

const initialState: ProductState = {
	products: [],
	status: "idle",
	error: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWatchs.pending, (state, action) => {
				state.status = "pending";
			})
			.addCase(fetchWatchs.fulfilled, (state, action) => {
				state.status = "succeeded";
				// Save the fetched posts into state
				state.products = action.payload;
			})
			.addCase(fetchWatchs.rejected, (state, action) => {
				state.status = "rejected";
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
