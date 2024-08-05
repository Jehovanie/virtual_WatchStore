import DetailsImage from "./DetailsImage";
import LongDescription from "./LongDescription";
import ShortDescription from "./ShortDescription";

const DetailsContent = () => {
	return (
		<div className="w-full">
			<div className="flex max-sm:flex-col sm:flex-row md:flex-row gap-2 mb-16">
				<div className="card_left_one w-full md:w-1/2">
					<DetailsImage />
				</div>
				<div className="card_right_one w-full md:w-1/2">
					<ShortDescription />
				</div>
			</div>
			<div className="mb-8">
				<LongDescription />
			</div>
		</div>
	);
};

export default DetailsContent;
