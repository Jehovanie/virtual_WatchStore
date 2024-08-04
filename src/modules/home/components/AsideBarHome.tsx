import asidebar from "./../../../assets/images/aside_bar_home.png";

const AsideBarHome = () => {
	return (
		<div className="w-full h-full bg-blue-500">
			<div className="relative h-full w-full">
				<div className="content_image_aside_bar h-full w-full">
					<img className="h-full w-full" src={asidebar} alt="image description" />
				</div>
			</div>
		</div>
	);
};

//md:h-[550px] max-sm:h-[270px] sm:h-[350px] max-h-[550px]

export default AsideBarHome;
