import { useEffect } from "react";
import DetailsComponents from "@/modules/details/components/DetailsComponents";
import { useParams } from "react-router-dom";

const Details = () => {
	const { watchID } = useParams();

	if (watchID === undefined) {
		return <h1>Jehovanie error....</h1>;
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [watchID]);

	return <DetailsComponents watchID={parseInt(watchID)} />;
};

export default Details;
