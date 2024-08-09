import { WatchModel } from "@/_shared/models";
import CardProductSuggest from "./CardProductSuggest";
import Spinner from "@/_shared/components/Spinner";

interface WatchListProps {
	watchs: WatchModel[];
}

const SuggestionProduct: React.FC<WatchListProps> = ({ watchs }) => {
	if (watchs.length === 0) {
		return (
			<div className="flex items-center justify-center">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="flex max-sm:flex-col sm:flex-row md:flex-row gap-2">
			<div className="card_left_one w-full md:w-1/2">
				<CardProductSuggest watch={watchs[0]} />
			</div>
			<div className="card_right_one w-full md:w-1/2">
				<CardProductSuggest watch={watchs[1]} />
			</div>
		</div>
	);
};

export default SuggestionProduct;
