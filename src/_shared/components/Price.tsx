interface PriceProps {
	price: Number;
	className: string | undefined;
}

const Price: React.FC<PriceProps> = ({ price, className }) => {
	const roundedNumber = parseFloat(price.toFixed(2));
	return (
		<div className={className ? "relative " + className : "relative"}>
			${roundedNumber.toString()}
			<div className="absolute inline-flex items-center justify-center w-6 h-6   border-2 border-white top-0 -end-6">
				<div className={className != undefined ? "text-sm font-bold" + className : "text-sm font-bold "}>
					.00
				</div>
			</div>
		</div>
	);
};

export default Price;
