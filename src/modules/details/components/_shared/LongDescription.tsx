import { WatchModel } from "@/_shared/models";
import { useState } from "react";

interface WatchProps {
	watch: WatchModel;
}

const LongDescription: React.FC<WatchProps> = ({ watch }) => {
	const [isShowDescription, setIsShwoDescription] = useState(true);
	const [isShowReview, setIsShwoReview] = useState(false);

	const toggleDescriptionReview = (motif: string) => {
		if (motif === "description") {
			setIsShwoDescription(true);
			setIsShwoReview(false);
		} else {
			setIsShwoDescription(false);
			setIsShwoReview(true);
		}
	};
	return (
		<div className="w-full">
			<ul className="items-center border-b w-auto text-sm font-medium text-gray-900 bg-white flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				<li className="border border-b-0 border-gray-200 p-4 dark:border-gray-600">
					<div
						className="flex items-center ps-3 cursor-pointer"
						onClick={() => toggleDescriptionReview("description")}
					>
						<h6 className={isShowDescription ? "text-blue-500" : ""}>DESCRIPTION</h6>
					</div>
				</li>
				<li className="border border-l-0 border-b-0 border-gray-200 p-4 dark:border-gray-600">
					<div
						className="flex items-center ps-3 cursor-pointer"
						onClick={() => toggleDescriptionReview("review")}
					>
						<h6 className={isShowReview ? "text-blue-500" : ""}>REVIEW</h6>
					</div>
				</li>
			</ul>
			<div className="content">
				<div className={isShowDescription ? "description" : "description hidden"}>
					<h2 className="text-4xl font-thin dark:text-white my-8">Description</h2>
					<p className="my-4  whitespace-normal text-gray-500">
						Martian Watches Passport Smart Watch (White/Silver/Black) – from the company that Invented the
						world’s first voice command watch comes passport. With impressive executive styling, the
						passport speaks for itself with a polished case that tops a bluetooth smart watch styled for
						individuals who want a stately analog timepiece. Passport acts as a hands-free gateway to the
						world, allowing users to see incoming calls and messages, make and receive calls through the
						watch’s discreet speaker and microphone, and do anything their smartphone can execute with a
						voice command. Passport is a game-changing hand-free solution for smartphone users.
					</p>
					<p className="mb-4  whitespace-normal text-gray-500 dark:text-gray-400">
						Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
						Accelerate critical development work, eliminate toil, and deploy changes with ease.
					</p>
					<p className="text-gray-500 whitespace-normal dark:text-gray-400">
						Martian Watches Passport Smart Watch (White/Silver/Black) – from the company that Invented the
						world’s first voice command watch comes passport. With impressive executive styling, the
						passport speaks for itself with a polished case that tops a bluetooth smart watch styled for
						individuals who want a stately analog timepiece. Passport acts as a hands-free gateway to the
						world, allowing users to see incoming calls and messages, make and receive calls through the
						watch’s discreet speaker and microphone, and do anything their smartphone can execute with a
						voice command. Passport is a game-changing hand-free solution for smartphone users.
					</p>
				</div>
				<div className={isShowReview ? "review" : "review hidden"}>
					<div className="overflow-x-auto">
						<h2 className="text-4xl font-thin dark:text-white my-8">REVIEW</h2>
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										Product name
									</th>
									<th scope="col" className="px-6 py-3">
										Color
									</th>
									<th scope="col" className="px-6 py-3">
										Category
									</th>
									<th scope="col" className="px-6 py-3">
										Price
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										Apple MacBook Pro 17"
									</th>
									<td className="px-6 py-4">Silver</td>
									<td className="px-6 py-4">Laptop</td>
									<td className="px-6 py-4">$2999</td>
								</tr>
								<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										Microsoft Surface Pro
									</th>
									<td className="px-6 py-4">White</td>
									<td className="px-6 py-4">Laptop PC</td>
									<td className="px-6 py-4">$1999</td>
								</tr>
								<tr className="bg-white dark:bg-gray-800">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										Magic Mouse 2
									</th>
									<td className="px-6 py-4">Black</td>
									<td className="px-6 py-4">Accessories</td>
									<td className="px-6 py-4">$99</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LongDescription;
