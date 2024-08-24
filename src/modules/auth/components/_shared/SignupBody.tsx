import { Link } from "react-router-dom";

export default function SignupBody() {
	return (
		<form className="w-full">
			<div className="mb-5">
				<label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">
					Your fullname
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">
					Your email
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">
					Your password
				</label>
				<input
					type="password"
					id="password"
					className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>
			<div className="flex items-start mb-5">
				<div className="flex items-center h-5">
					<input
						id="remember"
						type="checkbox"
						value=""
						className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
						required
					/>
				</div>
				<label htmlFor="remember" className="ms-2 text-sm font-medium text-white dark:text-gray-300">
					Accepter les terms de condition
				</label>
			</div>
			<div className="flex justify-between items-center">
				<button
					type="submit"
					className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Inscription
				</button>
				<Link to="/signin" className="font-thin text-blue-400 underline dark:text-blue-500 hover:no-underline">
					Se connecter
				</Link>
			</div>
		</form>
	);
}
