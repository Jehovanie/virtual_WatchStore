import { getAllWatchs, selectWatchById } from "@/_config/app/features/productSlice";
import { useAppSelector } from "@/_config/app/hooks/hooks";
import { WatchModel } from "@/_shared/models";

export const useHookDetailsComponents = (watchID: Number) => {
	const watch: WatchModel | undefined = useAppSelector((state) => selectWatchById(state, watchID));

	const all_watchs = useAppSelector(getAllWatchs);

	const relatedWatchs: WatchModel[] = all_watchs.slice(0, 3);

	return { watch, relatedWatchs };
};
