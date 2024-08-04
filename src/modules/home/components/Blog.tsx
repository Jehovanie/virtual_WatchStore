import image_3 from "./../../../assets/images/image_3.jpg";

const Blog = () => {
	return (
		<div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="rounded-t-lg" src={image_3} alt="" />
			<div className="absolute top-0 left-0 right-0 p-5 w-full h-full flex justify-center items-center">
				<div className="text-center">
					<button
						type="button"
						className="block w-48 mx-auto text-white bg-blue-700 text-center font-thin text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
						Technologie
					</button>

					<a href="#" className="font-normal underline text-white text-center">
						Here are the biggest enterprise technology acquisitions of 2021.
					</a>
				</div>
			</div>
		</div>
	);
};

export default Blog;
