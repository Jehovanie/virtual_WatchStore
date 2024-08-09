import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import image_1 from "@assets/images/image_1.jpg";
import { WatchModel } from "@/_shared/models";
import { Link } from "react-router-dom";
import Price from "@/_shared/components/Price";

interface WatchProps {
	watch: WatchModel;
}

const Product: React.FC<WatchProps> = ({ watch }) => {
	return (
		<div className="w-full md:max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="p-8 rounded-t-lg w-96 h-96 mx-auto" src={image_1} alt="product image" />
			<div className="px-5 pb-5">
				<Link to={`/detail/${watch.id}`}>
					<h5 className="text-xl font-thin tracking-tight text-gray-900 dark:text-white">
						{watch.brand} {watch.model}
					</h5>
				</Link>
				<div className="flex items-center mt-2.5 mb-5">
					<div className="flex items-center space-x-1 rtl:space-x-reverse">
						<FontAwesomeIcon icon={faStar} className="text-yellow-300" />
						<FontAwesomeIcon icon={faStar} className="text-yellow-300" />
						<FontAwesomeIcon icon={faStar} className="text-yellow-300" />
						<FontAwesomeIcon icon={faStar} className="text-gray-300" />
					</div>
					<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
						5.0
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						<Price price={parseFloat(watch.price.toString())} className="" />
					</span>
					<a
						href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add to cart
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
