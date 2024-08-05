import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import image_2 from "@assets/images/image_2.jpg";

const ItemRelatedProduct = () => {
	return (
		<div className="w-full md:max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="p-8 rounded-t-lg w-56 h-64 mx-auto" src={image_2} alt="product image" />
			<div className="px-5 pb-5">
				<a href="/detail">
					<h5 className="text-xl font-thin tracking-tight text-gray-900 dark:text-white">
						Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
					</h5>
				</a>
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
					<span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
					<a
						href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Add to cart
					</a>
				</div>
			</div>
		</div>
	);
};

export default ItemRelatedProduct;
