import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBreadCrumbSkeleton() {
	return (
		<div className="w-full h-full bg-gray-200">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto py-4">
				<div role="status" className="space-y-2.5 animate-pulse max-w-lg">
					<div className="flex items-center w-full max-w-[360px]">
						<div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
						<FontAwesomeIcon icon={faAngleRight} />
						<div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-80"></div>
						<FontAwesomeIcon icon={faAngleRight} />
						<div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
