import { getAllWatchs, selectWatchById } from "@/_config/app/features/productSlice";
import { useAppSelector } from "@/_config/app/hooks/hooks";
import { WatchModel } from "@/_shared/models";

export const useHookHomeComponent = () => {
	const all_watchs = useAppSelector(getAllWatchs);

	const some_products: WatchModel[] = all_watchs.slice(0, 3);
	const watch_promotion: WatchModel | undefined = useAppSelector((state) => selectWatchById(state, 5));
	const watch_suggestions: WatchModel[] = all_watchs.slice(3, 5);

	return { some_products, watch_promotion, watch_suggestions, all_watchs };
};
