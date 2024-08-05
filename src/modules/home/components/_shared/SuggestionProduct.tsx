// import image_1 from "./../../../assets/images/image_1.jpg";
// import image_2 from "./../../../assets/images/image_2.jpg";

import CardProductSuggest from "./CardProductSuggest";

const SuggestionProduct = () => {
	return (
		<div className="flex max-sm:flex-col sm:flex-row md:flex-row gap-2">
			<div className="card_left_one w-full md:w-1/2">
				<CardProductSuggest />
			</div>
			<div className="card_right_one w-full md:w-1/2">
				<CardProductSuggest />
			</div>
		</div>
	);
};

export default SuggestionProduct;
