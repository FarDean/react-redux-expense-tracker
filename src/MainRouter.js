import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function MainRouter() {
	return (
		<Router>
			<Route path="/">
				<Home />
			</Route>
		</Router>
	);
}

export default MainRouter;
