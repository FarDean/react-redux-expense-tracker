import { Route, Switch, useLocation } from "react-router-dom";
// import Home from "./components/Home";
// import { Modal } from "./components/Modal";
// import { AddExpense } from "./components/AddExpense";
import Home from "./Home";
import { Modal } from "./Modal";
import { AddExpense } from "./AddExpense";

export const ModalSwitch = () => {
	let location = useLocation();
	let background = location.state && location.state.background;

	return (
		<div>
			<Switch location={background || location}>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/add">
					<AddExpense />
				</Route>
			</Switch>
			{background && <Route path="/add" children={<Modal children={<AddExpense />} />} />}
		</div>
	);
};
