import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faMagnifyingGlass, faScaleBalanced, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
			<div className="w-full flex flex-wrap items-center justify-between py-4">
				<a href="logo.jpg" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="logo.jpg" className="h-16" alt="Flowbite Logo" />
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
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="relative flex items-center justify-between w-auto order-1 my-4" id="navbar-cta">
				<ul className="max-md:hidden flex font-medium p-0 mt-4 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 bg-blue-700 font-thin bg-transparent text-blue-700 md:dark:text-blue-500"
							aria-current="page">
							HOME
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-gray-900  font-thin hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							ABOUT
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-gray-900 font-thin hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							SERVICE
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-3 md:p-0 text-gray-900 font-thin hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							CONTACT
						</a>
					</li>
				</ul>

				<div className="flex items-center justify-between">
					<button
						data-collapse-toggle="navbar-hamburger"
						type="button"
						className="max-md:inline-flex  hidden items-center justify-between w-10 p-2 me-2 h-10 font-bold rounded-lg"
						aria-controls="navbar-hamburger"
						aria-expanded="false">
						<FontAwesomeIcon icon={faBars} className="text-4xl" />
					</button>

					<div className="hidden max-md:block relative">
						<input
							type="text"
							id="search-navbar"
							className="block px-2 py-2 ps-4 h-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search..."
						/>
						<div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</div>
					</div>
				</div>

				<div className="hidden absolute top-5 z-10 max-md:w-full" id="navbar-hamburger">
					<ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 border-2 dark:bg-gray-800 dark:border-gray-700">
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-white bg-blue-700 font-thin dark:bg-blue-600"
								aria-current="page">
								HOME
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 font-thin hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								SERVICE
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 font-thin hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
								PRICING
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 font-thin hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								CONTACT
							</a>
						</li>
					</ul>
				</div>

				<div className="flex md:order-2">
					<div className="relative w-full block">
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

export default Navbar;
