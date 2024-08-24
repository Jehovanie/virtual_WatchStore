import Footer from "@/_shared/components/Footer";
import NavbarAuth from "./_shared/NavbarAuth";
import SigninBody from "./_shared/SigninBody";

import image_4 from "@assets/images/image_4.jpg";

export default function SigninComponents() {
	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<NavbarAuth />
			</div>
			<div className="content_aside_bar_home max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] my-6 max-h-[550px] overflow-x-hidden">
				<div className="w-full h-full py-10">
					<div className="flex justify-center items-center w-1/2 h-full mx-auto">
						<div className="relative h-full w-full">
							<div className="h-full w-full">
								<img className="h-full w-full rounded-xl" src={image_4} alt="image description" />
							</div>
							<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
								<div className="w-1/2 mx-auto">
									<div className="w-full">
										<h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl dark:text-white">
											<span className="underline underline-offset-3 decoration-8 decoration-gray-500 dark:decoration-gray-600">
												Con
											</span>
											nexion
										</h1>
									</div>
									<SigninBody />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content_nav_bard w-full overflow-x-hidden">
				<Footer />
			</div>
		</div>
	);
}
