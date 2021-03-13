import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
	return (
		<Provider store={store}>
			<MainRouter />
		</Provider>
	);
}

export default App;
