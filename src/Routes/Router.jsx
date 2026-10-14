import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import PageOutlet from "../Layout/PageOutlet";

const router = createBrowserRouter([
	{
		path: "/",
		Component: PageOutlet,
		children: [{ path: "/", element: <Home></Home> }],
	},
]);

export default router;
