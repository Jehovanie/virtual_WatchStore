import { useEffect } from "react";
import HomeComponent from "@/modules/home/components/HomeComponent";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <HomeComponent />;
};

export default Home;
