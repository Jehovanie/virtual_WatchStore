import { useParams } from "react-router-dom";
import Footer from "../../../_shared/components/Footer";
import DetailsContent from "./_shared/DetailsContent";
import Navbar from "./_shared/Navbar";
import NavBreadCrumb from "./_shared/NavBreadCrumb";
import RelatedProduct from "./_shared/RelatedProduct";
import { WatchModel } from "@/_shared/models";
import { useAppSelector } from "@/_config/app/hooks/hooks";
import { getAllWatchs, selectWatchById } from "@/_config/app/features/productSlice";

const DetailsComponents = () => {
	const { watchID } = useParams();

	if (watchID === undefined) {
		return <h4>Jehovanie error...</h4>;
	}

	const watch: WatchModel | undefined = useAppSelector((state) => selectWatchById(state, parseInt(watchID)));

	if (watch === undefined) {
		return <h4>Jehovanie error...</h4>;
	}

	const all_watchs = useAppSelector(getAllWatchs);

	const relatedWatchs: WatchModel[] = all_watchs.slice(0, 3);

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
