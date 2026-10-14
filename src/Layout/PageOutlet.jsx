import { Outlet } from "react-router";
import Navbar from "./Navbar";

const PageOutlet = () => {
	return (
		<div>
			<Navbar></Navbar>

			<Outlet></Outlet>
		</div>
	);
};

export default PageOutlet;
