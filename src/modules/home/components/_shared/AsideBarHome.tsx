import { WatchModel } from "@/_shared/models";
import asidebar from "@assets/images/aside_bar_home.png";
import { Link } from "react-router-dom";

interface AsideBarHomeProps {
	watch: WatchModel | undefined;
}

const AsideBarHome: React.FC<AsideBarHomeProps> = ({ watch }) => {
	if (watch === undefined) {
		return <h2>hello Jehovenie</h2>;
	}

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
								<mark className=" px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
									$ {watch.price.toString()}
								</mark>{" "}
								discount over the mouth.
							</h1>
							<Link
								to={`/detail/${watch.id}`}
								className="mb-4 text-md font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
							>
								{watch.model} {watch.brand}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

//md:h-[550px] max-sm:h-[270px] sm:h-[350px] max-h-[550px]

export default AsideBarHome;
