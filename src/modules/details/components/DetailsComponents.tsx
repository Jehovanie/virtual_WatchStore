import Footer from "../../../_shared/components/Footer";
import DetailsContent from "./_shared/DetailsContent";
import Navbar from "./_shared/Navbar";
import NavBreadCrumb from "./_shared/NavBreadCrumb";
import RelatedProduct from "./_shared/RelatedProduct";
import { useAppDispatch, useAppSelector } from "@/_config/app/hooks/hooks";
import { getWatchStatus } from "@/_config/app/features/productSlice";
import { useEffect } from "react";
import { fetchWatchs } from "@/_config/app/features/AsyncThunk/fetchWatchs";
import { useHookDetailsComponents } from "../hooks/hooks";

interface DetailsCompontentsProps {
	watchID: Number;
}

const DetailsComponents: React.FC<DetailsCompontentsProps> = ({ watchID }) => {
	const dispatch = useAppDispatch();
	const watchStatus = useAppSelector(getWatchStatus);

	const { watch, relatedWatchs } = useHookDetailsComponents(watchID);

	useEffect(() => {
		if (watchStatus === "idle") {
			dispatch(fetchWatchs());
		}
	}, [watchStatus, dispatch]);

	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>
			<div className="content_nav_bread_crumb max-sm:mb-6 sm:mb-8 md:mb-16">
				<NavBreadCrumb watch={watch} />
			</div>
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto">
				<DetailsContent watch={watch} />
				<hr className="my-16" />
			</div>

			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<RelatedProduct watchs={relatedWatchs} />
			</div>

			<div className="content_nav_bard w-full overflow-x-hidden">
				<Footer />
			</div>
		</div>
	);
};

export default DetailsComponents;
