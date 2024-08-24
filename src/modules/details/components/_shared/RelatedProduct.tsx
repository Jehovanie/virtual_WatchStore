import { WatchModel } from "@/_shared/models";
import ItemRelatedProduct from "./ItemRelatedProduct";
import DefaultLoader from "@/_shared/components/DefaultLoader";

interface WatchListProps {
	watchs: WatchModel[];
}

const RelatedProduct: React.FC<WatchListProps> = ({ watchs }) => {
	return (
		<div className="w-full">
			<h4 className="text-2xl font-thin dark:text-white my-4 block">Related Product</h4>
			<div className="content_list_product">
				<div className="list_product grid grid-flow-row max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:gap-1 sm:gap-1 md:gap-3 gap-4">
					{watchs.length > 0 ? (
						watchs.map((watch) => <ItemRelatedProduct key={watch.id.toString()} watch={watch} />)
					) : (
						<DefaultLoader />
					)}
				</div>
			</div>
		</div>
	);
};

export default RelatedProduct;
