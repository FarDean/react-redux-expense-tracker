import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddExpense } from "./components/AddExpense";
import Home from "./components/Home";

function MainRouter() {
	return (
		<Router>
			<Switch>
				<Route path="/add">
					<AddExpense />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default MainRouter;
