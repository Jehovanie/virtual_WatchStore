import image_1 from "./../../../assets/images/image_1.jpg";

const CardProductSuggest = () => {
	return (
		<div className="flex flex-row items-center border border-gray-200 shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<img
				className="object-cover w-full max-sm:w-44 sm:w-44 max-sm:h-44 h-96 md:h-auto md:w-48"
				src={image_1}
				alt="Aside bar"
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="mb-3 font-thin text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
					order.
				</p>
			</div>
		</div>
	);
};

export default CardProductSuggest;
