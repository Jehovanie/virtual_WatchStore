import image_1 from "@assets/images/image_1.jpg";
import image_2 from "@assets/images/image_2.jpg";

const DetailsImage = () => {
	return (
		<div className="grid gap-4">
			<div className="w-full">
				<img className="h-[450px] max-w-full w-[400px] mx-auto rounded-lg" src={image_1} alt="" />
			</div>
			<div className="grid grid-cols-5 gap-4">
				<div>
					<img className="h-auto max-w-full rounded-lg" src={image_2} alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full rounded-lg" src={image_1} alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full rounded-lg" src={image_2} alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full rounded-lg" src={image_1} alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full rounded-lg" src={image_2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default DetailsImage;
