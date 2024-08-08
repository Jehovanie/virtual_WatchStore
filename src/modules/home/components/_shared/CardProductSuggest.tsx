import { WatchModel } from "@/_shared/models";
import image_1 from "@assets/images/image_1.jpg";
import { Link } from "react-router-dom";

interface WatchProps {
	watch: WatchModel;
}

const CardProductSuggest: React.FC<WatchProps> = ({ watch }) => {
	return (
		<div className="flex flex-row items-center border border-gray-200 shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<img
				className="object-cover w-full max-sm:w-44 sm:w-44 max-sm:h-44 h-96 md:h-auto md:w-48"
				src={image_1}
				alt="Aside bar"
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<Link to={`/detail/${watch.id}`} className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white"
				>
					{watch.brand} {watch.model}
				</Link>
				<p className="mb-3 font-thin text-gray-700 dark:text-gray-400">{watch.description}</p>
			</div>
		</div>
	);
};

export default CardProductSuggest;
