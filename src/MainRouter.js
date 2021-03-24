import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { AddExpense } from "./components/AddExpense";
import Home from "./components/Home";
import { Modal } from "./components/Modal";

function MainRouter() {
	let location = useLocation();
	let background = location.state && location.state.background;
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/add">
					<AddExpense />
				</Route>
			</Switch>
			{background && <Route path="/add" children={<Modal />} />}
		</Router>
	);
}

export default MainRouter;
