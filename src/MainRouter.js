import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { AppWrapper } from "./app/AppWrapper";
import { AddExpense } from "./components/AddExpense";

function MainRouter() {
	return (
		<Router>
			<AppWrapper>
				<Switch>
					<Route path="/add">
						<AddExpense />
					</Route>
				</Switch>
			</AppWrapper>
		</Router>
	);
}

export default MainRouter;
