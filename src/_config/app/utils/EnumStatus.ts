import { IDLE, PENDING, SUCCEEDED, REJECTED } from "./constant";

export const FETCH_STATUS =  {
	IDLE,
	PENDING,
	SUCCEEDED,
	REJECTED,
} as const;

export type FetchStatus = typeof FETCH_STATUS[keyof typeof FETCH_STATUS];
