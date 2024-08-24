import { client } from "@/_config/api/client";
import { createAppAsyncThunk } from "../../withTypes";
import { getWatchStatus } from "../productSlice";

export const fetchWatchs = createAppAsyncThunk(
	"watch/fetchAll",
	async () => {
		const response = await client.get<any>("/api/watchs");
		return response.data;
	},
	{
		condition(arg: any, thunkApi: any) {
			const watchStatus = getWatchStatus(thunkApi.getState());
			if (watchStatus !== "idle") {
				console.log(arg);
				return false;
			}
		},
	}
);
