import { WatchModel } from "@/_shared/models";
import Product from "./Product";
import Spinner from "@/_shared/components/Spinner";

interface WatchListProps {
	watchs: WatchModel[];
}

const SomeProduct: React.FC<WatchListProps> = ({ watchs }) => {

	if (watchs.length === 0) {
		return (
			<div className="flex items-center justify-center">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="w-full">
			<h4 className="text-2xl font-thin dark:text-white my-4 block">Our collection</h4>
			<div className="content_list_product">
				<div className="list_product grid grid-flow-row max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:gap-1 sm:gap-1 md:gap-3 gap-4">
					{watchs.map((item: WatchModel) => (
						<Product key={item.id.toString()} watch={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SomeProduct;
