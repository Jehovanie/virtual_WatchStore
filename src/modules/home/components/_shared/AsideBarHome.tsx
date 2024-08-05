import asidebar from "@assets/images/aside_bar_home.png";

const AsideBarHome = () => {
	return (
		<div className="w-full h-full bg-blue-500">
			<div className="relative h-full w-full">
				<div className="content_image_aside_bar h-full w-full">
					<img className="h-full w-full" src={asidebar} alt="image description" />
				</div>
				<div className="absolute top-0 left-0 right-0 w-full h-full flex items-center justify-center">
					<div className="max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto w-full">
						<div className="w-1/2 max-sm:w-full sm:w-2/3 md:w-1/2">
							<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-white">
								FROM{" "}
								<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">$450.00</mark>{" "}
								discount over the mouth.
							</h1>
							<h1 className="mb-4 text-md font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
								We invest in the world’s potential
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

//md:h-[550px] max-sm:h-[270px] sm:h-[350px] max-h-[550px]

export default AsideBarHome;
