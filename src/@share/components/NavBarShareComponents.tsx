import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPenNib, faScaleBalanced, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBarShareComponents = () => {
	return (
		<nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
			<div className="w-full flex flex-wrap items-center justify-between py-4">
				<a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						NobleWatchStore
					</span>
				</a>
				<div className="flex md:order-2 w-1/3">
					<div className="relative w-full hidden md:block">
						<input
							type="text"
							id="search-navbar"
							className="block w-full px-2 py-4 ps-4 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search..."
						/>
						<div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20">
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span className="sr-only">Search icon</span>
						</div>
					</div>
				</div>
			</div>
			<hr className="mb-4" />
			<div className="items-center justify-between  flex w-auto md:order-1" id="navbar-cta">
				<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
							aria-current="page">
							Home
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							About
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							Services
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							Contact
						</a>
					</li>
				</ul>
				<div className="flex md:order-2">
					<div className="relative w-full hidden md:block">
						<button
							type="button"
							className="relative inline-flex items-center p-3 text-sm font-medium text-center text-gray-800">
							<FontAwesomeIcon icon={faCartShopping} />
							<div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
								14
							</div>
						</button>
						<button
							type="button"
							className="relative inline-flex items-center p-3 text-sm font-medium text-center text-gray-800">
							<FontAwesomeIcon icon={faScaleBalanced} />
							<div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
								3
							</div>
						</button>
						<button
							type="button"
							className="relative inline-flex items-center p-3 text-sm font-medium text-center text-gray-800">
							<FontAwesomeIcon icon={faUser} />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBarShareComponents;
