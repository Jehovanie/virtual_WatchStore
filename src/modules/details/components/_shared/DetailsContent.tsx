import { WatchModel } from "@/_shared/models";
import DetailsImage from "./DetailsImage";
import LongDescription from "./LongDescription";
import ShortDescription from "./ShortDescription";

interface WatchProps {
	watch: WatchModel;
}

const DetailsContent: React.FC<WatchProps> = ({ watch }) => {
	return (
		<div className="w-full">
			<div className="flex max-sm:flex-col sm:flex-row md:flex-row gap-2 max-sm:mb-4 sm:mb-4 md:mb-16">
				<div className="card_left_one w-full md:w-1/2 max-sm:mb-4 sm:mb-6 md:mb-0">
					<DetailsImage />
				</div>
				<div className="card_right_one w-full md:w-1/2">
					<ShortDescription watch={watch} />
				</div>
			</div>
			<div className="mb-8">
				<LongDescription watch={watch} />
			</div>
		</div>
	);
};

export default DetailsContent;
