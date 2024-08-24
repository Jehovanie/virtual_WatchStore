import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarSearch() {
	return (
		<div className="flex md:order-2 w-1/3">
			<div className="relative w-full hidden md:block">
				<input
					type="text"
					id="search-navbar"
					className="block w-full px-2 py-4 ps-4 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
				/>
				<div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
			</div>
		</div>
	);
}
