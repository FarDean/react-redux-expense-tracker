import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { ModalSwitch } from "./components/ModalSwitch";

function MainRouter() {
	return (
		<Router>
			<ModalSwitch />
		</Router>
	);
}

export default MainRouter;
