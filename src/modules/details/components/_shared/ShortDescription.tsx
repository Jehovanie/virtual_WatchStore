import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBookmark, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { WatchModel } from "@/_shared/models";
import Price from "@/_shared/components/Price";

interface WatchProps {
	watch: WatchModel;
}

const ShortDescription: React.FC<WatchProps> = ({ watch }) => {
	const [quantity, setQuantity] = useState(0);

	const handleChangeQuantity = (value: React.SetStateAction<number>) => {
		setQuantity(value);
	};

	return (
		<div className="w-full max-sm:px-4 sm:px-4 md:px-16">
			<ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 mb-8">
				<li className="flex items-center space-x-3 rtl:space-x-reverse">
					<span>
						Model: <span className="font-semibold text-gray-900 dark:text-white">{watch.model}</span>
					</span>
				</li>
				<li className="flex items-center space-x-3 rtl:space-x-reverse">
					<span>
						Brand: <span className="font-semibold text-gray-900 dark:text-white">{watch.brand}</span>
					</span>
				</li>
				<li className="flex items-center space-x-3 rtl:space-x-reverse">
					<span>
						Type: <span className="font-semibold text-gray-900 dark:text-white">{watch.type}</span>
					</span>
				</li>
				<li className="flex items-center space-x-3 rtl:space-x-reverse">
					<span>
						Material: <span className="font-semibold text-gray-900 dark:text-white">{watch.material}</span>
					</span>
				</li>
			</ul>
			<div className="mb-8">
				<h2 className="text-2xl font-thing dark:text-white">
					{watch.model} {watch.brand}
				</h2>
				<Price
					price={parseFloat(watch.price.toString())}
					className="text-4xl font-light text-gray-500 dark:text-white my-4 w-20"
				/>
				<hr className="mb-4" />
				<p className="my-4 text-thing text-gray-500">{watch.description}</p>
			</div>

			<div className="mb-8">
				<h2 className="text-xl font-thing text-gray-500 dark:text-white mb-4">Quantity: ({quantity}) </h2>
				<div className="relative mb-6">
					<label htmlFor="labels-range-input" className="sr-only">
						Labels range
					</label>
					<input
						id="labels-range-input"
						type="range"
						value={quantity}
						min="0"
						max="15"
						className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						onChange={(e) => handleChangeQuantity(Number(e.target.value))}
					/>
					<span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
					<span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
						5
					</span>
					<span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
						10
					</span>
					<span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">15</span>
				</div>
			</div>

			<div className=" mt-16 mb-8 w-full flex items-center justify-between">
				<a
					href="#"
					className="max-sm:w-1/3 sm:w-1/3 md:w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<FontAwesomeIcon icon={faCartShopping} />
				</a>

				<a
					href="#"
					className="max-sm:w-1/3 sm:w-1/3 w-1/4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<FontAwesomeIcon icon={faScaleBalanced} />
				</a>
				<a
					href="#"
					className="max-sm:w-1/3 sm:w-1/3 w-1/4 text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<FontAwesomeIcon icon={faBookmark} />
				</a>
			</div>
		</div>
	);
};

export default ShortDescription;
