import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./redux/store";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
	return (
		<Provider store={store}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<MainRouter />
			</MuiPickersUtilsProvider>
		</Provider>
	);
}

export default App;
