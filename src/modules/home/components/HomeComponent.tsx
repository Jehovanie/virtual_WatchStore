import { useAppDispatch, useAppSelector } from "@/_config/app/hooks/hooks";
import Footer from "@/_shared/components/Footer";

import AsideBarHome from "./_shared/AsideBarHome";
import Navbar from "./_shared/Navbar";
import SomeBlog from "./_shared/SomeBlog";
import SomeProduct from "./_shared/SomeProduct";
import SuggestionProduct from "./_shared/SuggestionProduct";
import { getWatchStatus } from "@/_config/app/features/productSlice";
import { useEffect } from "react";
import { useHookHomeComponent } from "../hooks/hooks";
import { fetchWatchs } from "@/_config/app/features/AsyncThunk/fetchWatchs";

const HomeComponent = () => {
	const dispatch = useAppDispatch();
	const watchsStatus = useAppSelector(getWatchStatus);

	const { some_products, watch_promotion, watch_suggestions } = useHookHomeComponent();

	useEffect(() => {
		if (watchsStatus === "idle") {
			dispatch(fetchWatchs());
		}
	}, [watchsStatus, dispatch]);

	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>

			<div className="content_aside_bar_home max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16 overflow-x-hidden">
				<AsideBarHome watch={watch_promotion} />
			</div>

			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SuggestionProduct watchs={watch_suggestions} />
			</div>

			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SomeProduct watchs={some_products} />
			</div>

			<div className="content_aside_bar_home w-full max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16 overflow-x-hidden">
				<AsideBarHome watch={watch_promotion} />
			</div>

			{/* our blog */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SomeBlog />
			</div>

			<div className="content_nav_bard w-full overflow-x-hidden">
				<Footer />
			</div>
		</div>
	);
};

export default HomeComponent;
